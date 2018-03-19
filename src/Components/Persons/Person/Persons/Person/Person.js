import React,{Component} from 'react';
import classes from './Person.css';
// import Radium from 'radium';

class Person extends Component{
  constructor(props){
    super(props);
    console.log('[Person.js] Inside constructor', props);
  }


  componentWillMount(){
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[Person.js] Inside componentDidMount()');
  }
  render(){
    console.log('[Person.js] Inside render()');
    return (
      // <div className="Person" style={style}>
      <div className={classes.Person} >
      <p onClick={this.props.click}>hello, my name is {this.props.name} and my age is {this.props.age}</p>
      <p>{this.props.children}</p>
      <input type="text" onChange={this.props.changed} value={this.props.name}/>

      </div>

    )

  }
}


// export default Radium(person);
export default Person;
