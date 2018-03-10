import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    dogs: [
      {name: "kanjar",age: 23},
      {name: "kutta", age: 1},
      {name:"kamina", age: 5}
    ]
  };

  snHandler = (newName) =>{
    //console.log("hello");
  //dont do this  this.state.dogs[0].name="harami";
  this.setState({
    dogs: [
      {name: newName,age: 23},
      {name: "kutta", age: 1},
      {name:"kamina", age: 80}
    ]
   })
 };

 ncHandler = (event) =>{
   this.setState({
     dogs: [
       {name: "kanjar",age: 23},
       {name: event.target.value, age: 1},
       {name:"kamina", age: 5}
     ]
    })
 };

  render() {
    const style={
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
    };

    return (
      <div className="App">
    <h1> Hi, I am a react app</h1>
    <button
    style={style}
    onClick={() => this.snHandler("ash")}>Switch name</button>
    <Person
    name={this.state.dogs[0].name}
    age={this.state.dogs[0].age}
    click={this.snHandler.bind(this,"bda Kanjar")}>
    My hobbies: sleeping
    </Person>
    <Person
    name={this.state.dogs[1].name}
    age={this.state.dogs[1].age}
    changed={this.ncHandler}/>
    <Person name={this.state.dogs[2].name} age={this.state.dogs[2].age}/>
      </div>
    );
  }
}

export default App;
