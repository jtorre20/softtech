import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PersonService from "../services/PersonService";
// import Form from "./Form";
import '../App.css'

export default class Home extends Component<PropType> {

 constructor(props){
   super(props);

   this.state = {
    // data: null
   };

 }

  componentWillMount(){
    this.fetch();
  }


    async fetch(){ //async ensures that the fetch function returns a promise
     
      const data = await this.props.personService.findAll() //await makes JS wait until that promise settles and returns its result
      this.setState({ data })
      // debugger
    }

    updatedData = () => {
      this.setState({
        data: this.props.updatedPersonObject
      })
    }



  render() {

    const { data } = this.state
    const { handleUpdate} = this.props

    // let handleClick = (person) => {
    //   // let name = event.currentTarget.firstElementChild.childNodes[0].childNodes[1]
    //   // console.log(name)
    //   // PersonService.update(name)
    //   this.setState({ personToUpdate: person })
    //   // debugger

    // }

    function peopleList() {

      return data.map(personObject => {
        // console.log(personObject)
        // debugger
        return <li key={personObject.id} className="listItem" >
        <span className="listItem"><h6>First Name: {personObject.name.first}</h6></span>
        <span className="listItem"><h6>Last Name: { personObject.name.last}</h6></span>
        <span className="listItem"><h6>Eye Color: {personObject.eyeColor}</h6></span>
        <span className="listItem"><h6>Address: {personObject.address}</h6></span>
        <span className="listItem"><h6>Company: {personObject.company}</h6></span>
        <span className="listItem"><h6>Email: {personObject.email}</h6></span>
        <button onClick={() => handleUpdate(personObject)}><Link to="/updateForm">Update</Link></button>
        {/* <button>Click here to edit</button> */}
        
        </li>
      })
    }


    if( data === undefined){
       return ""
    } else{
      peopleList()
    }
 
    return (
      <div>
        {/* <h1>Front End Task</h1>
        <p>
          Please create the user interface components and logic to allow users
          to edit the Person information displayed on /people using the PersonService.
        </p>
        <p>
          The PersonService API is as follows:
          <br /><code>PersonService.findAll()</code>
          <br /><code>PersonService.update(personObject)</code>
        </p> */}

        <main id="main">
          <div>
            <h1> People List </h1>
          </div>
          <div>
            <ul className="list people-list">
              {peopleList()}
            </ul>
          </div>

        </main>
      </div>
    );
  }
}
