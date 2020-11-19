import React, { Component } from "react";
import ValidationError from "../App/validationError";
import ApiContext from "../ApiContext";
import Config from '../config'

class AddStudent extends Component {
  state = {
    student: {
      firstName: "",
      lastName:"",
      classes:"",
      touched: false,
    },
    rosterId: {
      value: "",
    },
    content: {
      value: "",
    },
  };

  static contextType = ApiContext;

  updateFirstName(student) {
    this.setState({ student: { firstName: student, touched: true } });
    console.log(this.state.student.firstName);
  }

  updateLastName(student) {
    this.setState({ student: { lastName: student, touched: true } });
    console.log(this.state.student.lastName);
  }

  updateContent(content) {
    this.setState({ content: { value: content } });
  }

  updateRosterId(id) {
    this.setState({ rosterId: { value: id } });
  }

  validateFirstName() {
    const firstName = this.state.student.firstName.trim();
    if (firstName.length === 0) {
      return "Name is required";
    }
}  
  validateLastName() {
      const lastName = this.state.student.lastName.trim();
      if(lastName.length === 0) {
          return "Name is required";
      }
  }  
  validateClassesName() {
      const lastName = this.state.student.lastName.trim();
      if(lastName.length === 0) {
          return "Name is required";
      }
  }  

 


  handleSubmit(event) {
    event.preventDefault();
    const { note, folderId, content } = this.state;
    console.log(note.firstName);
    const noteObj = {
      firstName: note.firstName,
      content: content.value,
      folder_id: parseInt(folderId.value),
      
    };
    console.log(noteObj)
    const url = `${Config.API_ENDPOINT}/students`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(noteObj),
    })
      .then((response) => response.json())
      .then((note) => {
        this.context.addNote(note);
        this.props.history.push(`/`);
      });
  }
  render() {
    const { folders } = this.context;
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} style={{ color: "white" }}>
        <label>Note firstName:</label>
        <input
          type="text"
          placeholder="Enter Note Name"
          onChange={(e) => this.updateNote(e.target.value)}
        />
        {this.state.note.touched && (
          <ValidationError message={this.validateName()} />
        )}
        <label>Description:</label>
        <input
          type="text"
          placeholder="Enter Description"
          onChange={(e) => this.updateContent(e.target.value)}
        />
        <label>Folders:</label>
        <select
          name="drop-down"
          id="drop-down"
          onChange={(e) => this.updateFolderId(e.target.value)}
        >
          <option>Must Select Folder</option>
          {folders.map((folder) => (
            <option key={folder.id} value={folder.id}>
              {folder.name}
            </option>
          ))}
        </select>
        <button type="submit" disabled={this.validateName()}>
          Add
        </button>
      </form>
    );
  }
}

export default AddStudent;

