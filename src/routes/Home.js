import React, { Component } from "react";
import PersonService from "../services/PersonService";
import '../App.css'

export default class Home extends Component<PropType> {

 constructor(){
   super();

   this.state = {};

  //  this.handleClick = this.handleClick.bind(this);
 }

  componentWillMount(){
    this.fetch();
  }


    async fetch(){ //ensures that the fetch function returns a promise
     
      const data = await PersonService.findAll() //await makes JS wait until that promise settles and returns its result
      this.setState({ data })
    }



  render() {

    const { data } = this.state

    // function handleButtonClick(e) {
    //   console.log(e)
    // }

    let handleClick = (event) => {
      let name = event.currentTarget.firstElementChild.childNodes[0].childNodes[1]
      console.log(name)
      // debugger
    }

    function peopleList() {

      return data.map(personObject => {
        // console.log(personObject)
        return <li key={personObject.id} className="listItem" onClick={handleClick}>
        <span className="listItem"><h6>Name: {personObject.name.first + " " + personObject.name.last}</h6></span>
        <span className="listItem"><h6>Eye Color: {personObject.eyeColor}</h6></span>
        <span className="listItem"><h6>Address: {personObject.address}</h6></span>
        <span className="listItem"><h6>Company: {personObject.company}</h6></span>
        <span className="listItem"><h6>Email: {personObject.email}</h6></span>
        <button>Click here to edit</button>
        
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
        <h1>Front End Task</h1>
        <p>
          Please create the user interface components and logic to allow users
          to edit the Person information displayed on /people using the PersonService.
        </p>
        <p>
          The PersonService API is as follows:
          <br /><code>PersonService.findAll()</code>
          <br /><code>PersonService.update(personObject)</code>
        </p>

        <main id="main">
          <div>
            <h1> People List </h1>
          </div>
          <div>
            <ul className="list people">
              {peopleList()}
            </ul>
          </div>

        </main>
      </div>
    );
  }
}
