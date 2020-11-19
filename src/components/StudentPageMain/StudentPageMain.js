import React from "react";
import ApiContext from "../../ApiContext";
import { findStudent } from "../../students-helpers";
import Student from "../Student/Student";
import "./StudentPageMain.css";

export default class StudentPageMain extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  handleDeleteStudent = (studentId) => {
    this.props.history.push(`/`);
  };

  render() {
    const { students = [] } = this.context;
    const { studentId } = this.props.match.params;
    const student = findStudent(students, parseInt(studentId)) || {
      content: "",
    };
    return (
      <section className="StudentPageMain">
        <Student
          id={student.id}
          firstName={student.firstName}
          lastName={student.lastName}
          modified={student.modified}
          onDeleteStudent={this.handleDeleteStudent}
        />
        <div className="StudentPageMain__content">
          {student.content.split(/\n \r|\n/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>
    );
  }
}
