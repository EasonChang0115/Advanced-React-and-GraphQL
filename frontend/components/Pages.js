import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled from 'styled-components';

const MyButton = styled.button`
  background-color: red;
  font-size: ${props => props.huge ? '100px' : '20px'};
  .poop {
    font-size: 25px;
  }
`;

class Pages extends Component {
  render() {
    return (
      <div>
        <Meta></Meta>
        <Header></Header>
        <MyButton huge>click me!<span className="poop">💩</span></MyButton>
        <MyButton>click me!<span className="poop">💩</span></MyButton>
        {this.props.children}
      </div>
    )
  }
}

export default Pages;
