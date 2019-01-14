import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Form extends Component {
  constructor(props) {
    super(props);


    this.state = {
      personToUpdate: this.props.personToUpdate
    };

  }

  updatePersonInfo = (attribute) => {
    let clone = this.state.personToUpdate
    let ele = document.getElementsByClassName(attribute)
    let updatedAttribute = ele[0].value
    clone[attribute] = updatedAttribute
  
    
    this.setState({
      personToUpdate: clone
    })
  }
  

  // sendUpdate = (updatedPerson) => {
  //   updatedPerson = this.state.personToUpdate
  //   // debugger
  // }

  render() {
    const { personToUpdate, sendUpdate } = this.props

    
    
    
    return(

      <form className="form people-form">
        <p>Name: <input className="name"type="text" defaultValue={personToUpdate.name.first + " " + personToUpdate.name.last} onChange={() => this.updatePersonInfo("name")}></input></p>
        <p>Address: <input className="address"type="text" defaultValue={personToUpdate.address} onChange={() =>this.updatePersonInfo("address") }></input></p>
        <p>Email: <input className="email"type="text" defaultValue={personToUpdate.email} onChange={() => this.updatePersonInfo("email")}></input></p>
        <p>Eye Color: <input className="eyeColor" type="text" defaultValue={personToUpdate.eyeColor} onChange={() => this.updatePersonInfo("eyeColor")}></input></p>
        <p>Company: <input className="company" type="text" defaultValue={personToUpdate.company} onChange={() => this.updatePersonInfo("company")}></input></p>
        <p>Phone: <input className="phone" type="text" defaultValue={personToUpdate.phone} onChange={() => this.updatePersonInfo("phone") }></input></p>
        <button className="button form-button" type="submit" onClick={() => sendUpdate(this.state.personToUpdate)}><Link to="/">Update Person</Link></button>
      </form>
    );
  }
}