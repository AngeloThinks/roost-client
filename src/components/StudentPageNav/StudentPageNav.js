import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//added {} to Button to fix routing
import CircleButton  from "../Button/CircleButton";
import { findStudent, findRoster } from "../../students-helpers";
import "./StudentPageNav.css";
import ApiContext from "../../ApiContext";

export default class StudentPageNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => {},
    },
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  render() {
    const { students, rosters } = this.context;
    const { studentId } = this.props.match.params;
    const student = findStudent(students, studentId) || {};

    const roster = findRoster(rosters, student.rosterId);
    return (
      <div className="StudentPageNav">
        <CircleButton
          tag="button"
          role="link"
          onClick={() => this.props.history.goBack()}
          className="StudentPageNav__back-button"
        >
          <FontAwesomeIcon icon="chevron-left" />
          <br />
          Back
        </CircleButton>
        {roster && (
          <h3 className="StudentPageNav__roster-name">{roster.name}</h3>
        )}
      </div>
    );
  }
}
