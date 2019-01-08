import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);


    this.state = {
      personToUpdate: this.props.personToUpdate
    };

  }

  updatePersonInfo = (attribute) => {
    let ele = document.getElementsByClassName(attribute)
    let updatedAttribute = ele[0].value
    let clone = this.state.personToUpdate
    clone[attribute] = updatedAttribute
    
    
    this.setState({
      personToUpdate: clone
    })
    debugger
  }

  sendUpdate = () => {
    // debugger
  }

  render() {
    const { personToUpdate } = this.props
    // const { updatePersonInfo } = this.updatePersonInfo

    
    
    
    return(

      <form className="form people-form">
        <p>Name: <input className="name"type="text" defaultValue={personToUpdate.name.first + " " + personToUpdate.name.last} onChange={() => this.updatePersonInfo("name")}></input></p>
        <p>Address: <input className="address"type="text" defaultValue={personToUpdate.address}></input></p>
        <p>Email: <input type="text" defaultValue={personToUpdate.email}></input></p>
        <p>Eye Color: <input className="eyeColor" type="text" defaultValue={personToUpdate.eyeColor} onChange={() => this.updatePersonInfo("eyeColor")}></input></p>
        <p>Company: <input type="text" defaultValue={personToUpdate.company}></input></p>
        <button className="button form-button" type="submit" onClick={this.sendUpdate}>Update Person</button>
      </form>
    );
  }
}