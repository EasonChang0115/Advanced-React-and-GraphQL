import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offwhite: '#EDEDED',
  maxWidth: '1000px',
  boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const StylePage = styled.div`
  background-color: white;
  color: ${ props => props.theme.black };
`;
const Inner = styled.div`
  max-width: ${ props => props.theme.maxWidth };
  margin: 0 auto;
  padding: 2rem;
`;

class Pages extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StylePage>
          <Meta></Meta>
          <Header></Header>
          <Inner>
            {this.props.children}
          </Inner>
        </StylePage>
      </ThemeProvider>
    )
  }
}

export default Pages;
