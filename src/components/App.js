import React, { Component } from 'react';
//import Button from './Button';
//import List from './List';
import './../App.css';

class App extends Component {
  state = { items: [2,3] };

  addToList = () => {
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
        <div>
          { list }
        </div>
        <button onClick={ this.addToList }>
          Click
        </button>
      </div>
    );
  }
}

export default App;
