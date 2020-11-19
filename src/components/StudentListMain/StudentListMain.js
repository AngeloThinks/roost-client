import React from "react";
import { Link } from "react-router-dom";
import { getStudentsForRoster } from "../../students-helpers";
import "./StudentListMain.css";
import ApiContext from "../../../src/ApiContext";
import CircleButton from "../Button/CircleButton";
import Student from "../Student/Student";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class StudentListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  render() {
    const { rosterId } = this.props.match.params;
    // console.log(rosterId)
    const { students = [] } = this.context;
    // console.log(students)
    const studentsForRoster = getStudentsForRoster(
      students,
      parseInt(rosterId)
    );
    // console.log(studentsForRoster)
    return (
      <section className="StudentListMain">
        <ul>
          {studentsForRoster.map((student) => {
            return (
              <li key={student.id}>
                <Student
                  id={student.id}
                  name={student.name}
                  modified={student.modified}
                />
              </li>
            );
          })}
        </ul>
        <div className="StudentListMain__button-container">
          <CircleButton
            tag={Link}
            to="/roster/add-student"
            type="button"
            className="StudentListMain__add-student-button"
          >
            <FontAwesomeIcon icon="plus" />
            <br />
            Student
          </CircleButton>
        </div>
      </section>
    );
  }
}
