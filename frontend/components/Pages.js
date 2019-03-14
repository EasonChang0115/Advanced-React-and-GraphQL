import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';

class Pages extends Component {
  render() {
    return (
      <div>
        <Meta></Meta>
        <Header></Header>
        {this.props.children}
      </div>
    )
  }
}

export default Pages;
