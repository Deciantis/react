import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
state = {
  persons: [
    {name: 'Max', age: "28"},
    {name: "Manu", age: "25"},
    {name: "Alia", age: "26"}
  ]

}

switchNameHandler = (newName) => {
 // this.state.persons[0] = 'Maximilian';
  this.setState({ 
    persons: 
    [
    {name: newName, age: "28"},
    {name: "Manu", age: "25"},
    {name: "Alia", age: "27"}
  ]
}
)
}

nameChangeHandler = (event) => {
  // this.state.persons[0] = 'Maximilian';
   this.setState({ 
     persons: 
     [
     {name: "Max", age: 28},
     {name: event.target.value, age: 25},
     {name: "Alia", age: 27}
   ]
 }
 )
 }

  render() {
    return (
      <div className="App">
       <h1>
         Hi, I'm a react app
       </h1>
       <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch Name</button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age} 
       click={this.switchNameHandler}
       />
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       click={this.switchNameHandler.bind(this, 'Max-Nu!')}
       changed={this.nameChangeHandler}
       > My Hobbies: Racing 
       
       </Person>
       
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}/>
      </div>
    ); 

  }
}

export default App;
