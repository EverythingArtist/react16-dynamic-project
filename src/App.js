import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    dogs: [
      {id: 'vr11',name: "kanjar",age: 23},
      {id: 'vr12',name: "kutta", age: 1},
      {id: 'vr13',name:"kamina", age: 5}
    ],
    showPersons: false

  };

 deletePersonHandler = (personIndex) =>{
const persons = [...this.state.dogs];
persons.splice(personIndex,1);
this.setState({dogs: persons});
};

 ncHandler = (event,id) =>{

   const personIndex = this.state.dogs.findIndex(p=>{
     return p.id === id;
   });

   const person = {
     ...this.state.dogs[personIndex]
   };

   person.name=event.target.value;

   const persons = [...this.state.dogs];
   persons[personIndex] = person;


   this.setState({dogs: persons});
 }

 tpHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow});
 }

  render() {

    let btnClass='';

    // const style={      //react inline style
    // backgroundColor: 'green',
    // color: 'white',
    // font: 'inherit',
    // border: '1px solid blue',
    // padding: '8px',
    // cursor: 'pointer',
    // };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div>
        {this.state.dogs.map((person,index)=>{
          return <Person
          click = {() =>this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event)=>this.ncHandler(event, person.id)}/>
        })} {/* have to convert array of objects to array (vanilla js gives map func)*/}

      </div>
      );
      // style.backgroundColor = 'red';
      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if(this.state.dogs.length <= 2){
      assignedClasses.push(classes.red); //classes = ['red']
    }

    if(this.state.dogs.length <= 1){
      assignedClasses.push(classes.bold); //classes = ['red',bold]
    }
//all jsx
    return (

      <div className={classes.App}>
    <h1> Hi, I am a react app</h1>
    <p className={assignedClasses.join(' ')}>This is really working! </p>
    <button className={btnClass}
  //style={style} //this is where your react inline style goes
    onClick={this.tpHandler}>Toggle person</button>
    {persons}
      </div>

    );
  }
}

export default App;
