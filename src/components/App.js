import React, { Component } from 'react';
//import Button from './Button';
//import List from './List';
import './../App.css';

class App extends Component {
  state = { items: [2,3] };

  addToList = () => {
    console.log(this.refs.itemInput.value)
    return
    this.setState({
      items: this.state.items.concat(1337)
    })
  };

  render() {
    const list = this.state.items.map(function(item, index) {
      return <div key={index}>{ item }</div>
    });
    console.log(list);  

    return(
      <div>
        <input type="text" ref="itemInput"></input>
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
