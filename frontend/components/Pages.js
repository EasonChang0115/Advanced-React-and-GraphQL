import React, { Component } from 'react';
import Header from '../components/Header';

class Pages extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        {this.props.children}
      </div>
    )
  }
}

export default Pages;
