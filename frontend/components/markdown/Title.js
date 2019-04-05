import React, { Component } from 'react';
import styled from 'styled-components';

const TitleStyles = styled.div`
  width: 100%;
  padding: 1.2rem 1.6rem;
  input {
    width: 100%;
    height: 26px;
    font-family: 'Roboto',sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #303233;
    line-height: 48px;
    border: none;
    outline: none;
  }
`;

const Title = props => (
  <TitleStyles>
    <input type="text" value={props.title} placeholder={props.placeholder} onChange={props.titleChangeFunc}/>
  </TitleStyles>
)

export default Title;
