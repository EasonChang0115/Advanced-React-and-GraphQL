import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ScrollButton = styled.button`
  opacity: 0.3;
  background-color: ${props => props.theme.mainColor};
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  border: none;
  transition: .3s;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }

  .arrow-up {
    color: white;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -9px;
    margin-left: -5px;
    cursor: pointer;
  }
`; 

class ScrollTopButton extends Component {
  static propTypes = {
    delayInMs: PropTypes.number,
    scrollStepInPx: PropTypes.number,
  }

  constructor() {
    super();
    this.state = {
      intervalId: 0
    };
  }

  scrollStep = () => {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }

  render() {
    return (
    <ScrollButton onClick={ () => { this.scrollToTop(); }}>
      <FontAwesomeIcon className='arrow-up' icon="angle-double-up"></FontAwesomeIcon>
    </ScrollButton>);
  }
}

export default ScrollTopButton;