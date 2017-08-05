import React, { Component } from 'react';
//import Button from './Button';
//import List from './List';
import './../App.css';

class App extends Component {
  state = { items: [] };

  addToList = () => {
    this.setState({
      items: this.state.items.concat(this.refs.itemInput.value)
    })
    this.refs.itemInput.value = ''
  };
  changeTodo = () => {
    console.log("Hej");
  }

  render() {
    const list = this.state.items.map((item, index) => {
      return <li onClick={this.changeTodo} key={index}>{item}</li>
    });

    console.log(list);  

    return(
      <div>
        <input type="text" placeholder="Add task" ref="itemInput"></input>
        <button onClick={this.addToList}>
          Click
        </button>
        <ul>
          { list }
        </ul>
      </div>
    );
  }
}

export default App;
