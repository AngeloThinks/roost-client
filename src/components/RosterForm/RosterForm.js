import React from "react";
import "./RosterForm.css";
import ApiContext from "../../ApiContext";

export default class RosterForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);

    //using values from the state, call addStudent on the context, add on change listeners and add a function to detect when those fields are changing, properties to add are three inputs in the return statement
  };
  render() {
    const { className } = this.props;
    
    return (
      <ApiContext.Consumer>
        {({ rosters }) => (
          <form
            onSubmit={this.handleSubmit}
            className={["roster-form", className].join(" ")}
            action="#"
          >
            <label>Class/Subject</label>
            <input type="text"></input>
            <label>Content</label>
            <input type="text"></input>
            <label>Roster</label>
            <select>
              {rosters.map((roster) => (
                <option value={roster.id}>{roster.name}</option>
              ))}
            </select>
            <button type="submit">Create Roster</button>
          </form>
        )}
      </ApiContext.Consumer>
    );
  }
}
