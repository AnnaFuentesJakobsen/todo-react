import React, { Component } from 'react';
import Button from './Button';
import List from './List';
import './../App.css';


class App extends Component {
  state = { items: [2,3] };

  addToList = () => {
    this.setState({
      items: [2,3,4]
    })
  };

  render() {
    return(
      <div>
        <List data={ this.state.items }/>
        <Button handleClick={ this.addToList }/>
      </div>
    );
  }
}

export default App;
