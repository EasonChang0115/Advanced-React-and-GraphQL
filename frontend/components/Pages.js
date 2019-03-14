import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

// 全域CSS變數 用ThemeProvider 倒進 各個styled.component 的props中，
const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offwhite: '#EDEDED',
  maxWidth: '1000px',
  boxShadow: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

// css normalize
injectGlobal`
  @font-face {
    font-family: 'radnika-next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika-next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

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
