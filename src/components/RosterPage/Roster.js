import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StudentListNav from "../StudentListNav/StudentListNav";
import StudentPageNav from "../StudentPageNav/StudentPageNav";
import StudentListMain from "../StudentListMain/StudentListMain";
import StudentPageMain from "../StudentPageMain/StudentPageMain";
import AddRoster from "../../App/AddRoster";
import AddStudent from "../../App/AddRoster";
import AddBoundaries from "../ErrorBoundaries/AddBoundaries";
import ApiContext from "../../ApiContext";
import config from "../../config";
import "./Roster.css";
import RosterForm from "../RosterForm/RosterForm";

class Roster extends Component {
  state = {
    students: [],
    rosters: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/students`),
      fetch(`${config.API_ENDPOINT}/rosters`),
    ])
      .then(([studentsRes, rostersRes]) => {
        if (!studentsRes.ok)
          return studentsRes.json().then((e) => Promise.reject(e));
        if (!rostersRes.ok)
          return rostersRes.json().then((e) => Promise.reject(e));

        return Promise.all([studentsRes.json(), rostersRes.json()]);
      })
      .then(([students, rosters]) => {
        // console.log(students, rosters);
        this.setState({ students, rosters });
      })
      .catch((error) => {
        console.error({ error });
      });
  }

  handleDeleteStudent = (studentId) => {
    this.setState({
      students: this.state.students.filter(
        (student) => student.id !== studentId
      ),
    });
  };

  handleDeleteRoster = (rosterId) => {
    this.setState({
      rosters: this.state.rosters.filter((roster) => roster.id !== rosterId),
    });
  };

  handleAddRoster = (roster) => {
    this.setState({
      rosters: [...this.state.rosters, roster],
    });
  };

  handleAddStudent = (student) => {
    console.log(student);
    this.setState({
      students: [...this.state.students, student],
    });
    console.log(this.state.students);
  };

  renderNavRoutes() {
    return (
      <>
        {["/roster", "/roster/:rosterId"].map((path) => (
          <Route exact key={path} path={path} component={StudentListNav} />
        ))}
        <Route path="/roster/student/:studentId" component={StudentPageNav} />
        <Route path="/roster/add-roster" component={AddRoster} />
        <Route path="/roster/add-student" component={StudentPageNav} />
      </>
    );
  }

  renderMainRoutes() {
    return (
      <>
        {["/roster", "/roster/:rosterId"].map((path) => (
          <Route exact key={path} path={path} component={StudentListMain} />
        ))}
        <Route path="/roster/student/:studentId" component={StudentPageMain} />
        <Route path="/roster/add-roster" component={AddRoster} />
        <Route path="/roster/add-student" component={AddStudent} />
        <Route path="/roster/roster-form" component={RosterForm} />
      </>
    );
  }

  render() {
    const value = {
      students: this.state.students,
      rosters: this.state.rosters,
      deletestudent: this.handleDeletestudent,
      deleteroster: this.handleDeleteRoster,
      AddRoster: this.handleAddRoster,
      AddStudent: this.handleAddStudent,
    };
    return (
      <ApiContext.Provider value={value}>
        <div className="Roster">
          <AddBoundaries>
            <nav className="Roster__nav">{this.renderNavRoutes()}</nav>
          </AddBoundaries>
          <header className="Roster__header">
            <h1>
              <Link to="/roster">Rosters</Link>{" "}
              <FontAwesomeIcon icon="check-double" />
            </h1>
          </header>
          <AddBoundaries>
            <main className="Roster__main">{this.renderMainRoutes()}</main>
          </AddBoundaries>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default Roster;
