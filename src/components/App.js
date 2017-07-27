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

  render() {
    const list = this.state.items.map(function(item, index) {
      return <div key={index}>{ item }</div>
    });
    console.log(list);  

    return(
      <div>
        <input type="text" placeholder="Add task" ref="itemInput"></input>
        <button onClick={ this.addToList }>
          Click
        </button>
        <div>
          { list }
        </div>
      </div>
    );
  }
}

export default App;
