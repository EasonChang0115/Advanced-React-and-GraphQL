import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

const MyButton = styled.button`
  background-color: red;
  font-size: 100px;
`;

class Pages extends Component {
  render() {
    return (
      <div>
        <Meta></Meta>
        <Header></Header>
        <MyButton>按我</MyButton>
        {this.props.children}
      </div>
    )
  }
}

export default Pages;
