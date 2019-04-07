import React, { Component } from 'react';
import styled from 'styled-components';
import SavaButtons from './SavaButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TagStyles = styled.li`
  &.tag-selected {
    background-color: #E8EFF2;
    color: #6B8793;
    border: 1px solid #c7d8e0;
    margin: 0px 4px;
    border-radius: 4px;
    margin-right: 5px;
    margin-top: 5px;
    padding: 0 5px;
    cursor: default;
    span.remove-selected {
      color: #999;
      cursor: pointer;
      display: inline-block;
      font-weight: bold;
      font-size: 14px;
      margin-right: 4px;
      user-select: none;
      &:hover {
        color: black;
      }
    }
  }
  &.tag-input {
    input {
      width: 100%;
      height: 100%;
      font-family: 'Roboto',sans-serif;
      font-size: 1.6rem;
      border: none;
      outline: none;
      margin-top: 5px;
      padding: 0;
    }
  }
`;

const TagBarStyles = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
  background-color: white;
  border: 1px solid #E5E5E5;
  .tag-icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    font-size: 1.6rem;
    color: #495057;
    border-right: 1px solid #cccfd1;
    white-space: nowrap;
    &:before, &:after {
      position: absolute;
      right: -18px;
      top: 50%;
      content: "";
      display: block;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-left: 10px solid #cccfd1;
      transform: translateY(-50%);
    }
    &:after {
      right: -16px;
      border-left: 10px solid #fff;
    }
  }
  .tags-selected-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 16px;
    width: 100%;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

class TagBar extends Component {
  state = {
    inputValue: ''
  }
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleInputKeydown = e => {
    if (e.key === 'Enter' && this.state.inputValue.trim().length !== 0) {
      this.props.addtagFunc(this.state.inputValue);
      this.setState({
        inputValue: ''
      });
    }
  }
  render() {
    let tags = this.props.tags.map((tag, index) => (
      <TagStyles className="tag-selected" key={index}>
        <span className="remove-selected" onClick={()=>{this.props.removetagFunc(index)}}>×</span>{tag}
      </TagStyles>));
    return (
      <TagBarStyles>
        <div className="tag-icon">
          <FontAwesomeIcon className='tags' icon="tags"></FontAwesomeIcon><span style={{marginLeft: '8px'}}>Tag</span>
        </div>
        <div className="tags-selected-bar">
          <ul className="tags-group">
            {tags}
            <TagStyles className="tag-input">
              <input type="text" name="inputValue" value={this.state.inputValue} 
                onChange={this.handleInputChange}
                onKeyDown={this.handleInputKeydown}/>
            </TagStyles>
          </ul>
          <SavaButtons disabled={this.props.disabled} saveArticleFunc={this.props.saveFunc} releaseArticleFunc={this.props.releaseFunc}/>
        </div>
      </TagBarStyles>
    );
  };
}

export default TagBar;