import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();


    this.state = {};

  }

  render() {
    // let f = document.createElement('form');

    return(

      // f.setAttribute("method", "post");
      // f.setAttribute("action", "submit");
      <form>
        <p>Name: <input type="text" placeholder="Name"></input></p>
        <p>Address: <input type="text" placeholder="Address"></input></p>
        <p>Email: <input type="text" placeholder="Email"></input></p>
        <p>Phone Number: <input type="text" placeholder="Phone Number"></input></p>
        <p>Company: <input type="text" placeholder="Company"></input></p>
      </form>
    );
  }
}