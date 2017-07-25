import React, { Component } from 'react';

class List extends Component {
  render(){
    return(
      <div>
        {this.props.data.length}
      </div>
    )
  }
}

export default List;