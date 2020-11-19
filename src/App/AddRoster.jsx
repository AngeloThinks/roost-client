import React, { Component } from "react";
import ValidationError from "../App/validationError";
import ApiContext from "../ApiContext";
import Config from "../config";


class AddRoster extends Component {
  state = {
    roster: {
      value: "",
      touched: false,
    },
  };

  static contextType = ApiContext;

  updateRoster(roster) {
    this.setState({ roster: { value: roster, touched: false } });
    console.log(this.state.roster.value);
  }

  validateRosterName() {
    const roster = this.state.roster.value.trim();
    if (roster.length === 0) {
      return "Name is required";
    }
  }
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} style={{ color: "white" }}>
        <label>Add Roster:</label>
        <input
          type="text"
          placeholder="Enter Roster Name"
          onChange={(e) => this.updateRoster(e.target.value)}
        />
        {this.state.roster.touched && (
          <ValidationError message={this.validateRosterName()} />
        )}
        <button type="submit" disabled={this.validateRosterName()}>
          Create Roster
        </button>
      </form>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const { roster } = this.state;
    console.log(roster.value);
    const rosterObj = { name: roster.value };
    const url = `${Config.API_ENDPOINT}/roster`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rosterObj),
    })
      .then((response) => response.json())
      .then((roster) => {
        this.context.addRoster(roster);
        this.props.history.push(`/`);
      });
  }
}

export default AddRoster;
