import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

// 全域CSS變數 用ThemeProvider 倒進 各個styled.component 的props中，
const theme = {
  mainColor: '#083884',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1080px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: rgba(0, 0, 0, 0.05);
  color: ${props => props.theme.black};
  min-height: 100%;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
`;

// css normalize
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700,700i');
  html {
    box-sizing: border-box;
    font-size: 10px;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    line-height: 2;
    font-family: 'Roboto', sans-serif;
    height: 100%;
    div#__next {
      height: 100%;
    }
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'Roboto', sans-serif; }
  #nprogress .bar {
    background: blue !important;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Inner>
            <Header />
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
