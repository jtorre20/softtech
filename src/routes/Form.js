import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);


    this.state = {};

  }

  render() {
    const { personToUpdate } = this.props
    // debugger

    return(

      // f.setAttribute("method", "post");
      // f.setAttribute("action", "submit");
      <form>
        <p>Name: <input type="text" placeholder={personToUpdate.name.first + " " + personToUpdate.name.last}></input></p>
        <p>Address: <input type="text" placeholder={personToUpdate.address}></input></p>
        <p>Email: <input type="text" placeholder={personToUpdate.email}></input></p>
        <p>Eye Color: <input type="text" placeholder={personToUpdate.eyeColor}></input></p>
        <p>Company: <input type="text" placeholder={personToUpdate.company}></input></p>
      </form>
    );
  }
}