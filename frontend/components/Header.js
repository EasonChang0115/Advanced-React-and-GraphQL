import React, { Component } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  NProgress.start();
}
Router.onRouteChangeComplete = () => {
  NProgress.done();
}
Router.onRouteChangeError = () => {
  NProgress.done();
}

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.mainColor};
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const StyledHeader = styled.header`
  margin-bottom: 1.6rem;
  .header-logo {
    display: grid;
    grid-template-columns: 1fr;
    align-items: stretch;
    justify-content: center;
  }
  .header-menu {
    background-color: rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .social-media-btn, .search-btn {
      height: 42px;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

class Header extends Component {
  render() {
    return (
    <StyledHeader>
      <div className="header-logo">
        <Logo>
          <Link href="/">
            <a>Lit BLOG</a>
          </Link>
        </Logo>
      </div>
      <div className="header-menu">
        <div className="social-media-btn"></div>
        <Nav></Nav>
        <div className="search-btn"></div>
      </div>
    </StyledHeader>)
  }
	
}

export default Header;