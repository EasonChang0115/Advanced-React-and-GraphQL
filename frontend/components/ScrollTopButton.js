import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ScrollButton = styled.button`
  opacity: 0.3;
  background-color: aqua;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  border-radius: 5px;
  border: none;
  
  &:hover {
    opacity: 1;
  }

  .arrow-up {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -9px;
    margin-left: -5px;
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
      <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
    </ScrollButton>);
  }
}

export default ScrollTopButton;