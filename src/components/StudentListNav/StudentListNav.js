import React from "react";
import { NavLink, Link } from "react-router-dom";
import CircleButton from "../Button/CircleButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./StudentListNav.css";
import ApiContext from "../../ApiContext";
import { countStudentsForRoster } from "../../students-helpers";

export default class StudentListNav extends React.Component {
  static contextType = ApiContext;

  render() {
    const { rosters = [], students = [] } = this.context;
    return (
      <div className="StudentListNav">
        <ul className="StudentListNav__list">
          {rosters.map((roster) => (
            <li key={roster.id}>
              <NavLink
                className="StudentListNav__folder-link"
                to={`/roster/${roster.id}`}
              >
                <span className="StudentListNav__num-students">
                  {countStudentsForRoster(students, roster.id)}
                </span>
                {roster.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="StudentListNav__button-wrapper">
        
          <CircleButton
            tag={Link}
            to="/roster/add-roster"
            type="button"
            className="StudentListNav__add-roster-button"
          >
            <FontAwesomeIcon icon="plus" />
            <br />
            Roster
          </CircleButton>
        </div>
      </div>
    );
  }
}
