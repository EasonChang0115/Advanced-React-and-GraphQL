import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './markdown/Title';
import MdEditor from './markdown/MdEditor';

const CreateArticleStyles = styled.div``;

class CreateArticle extends Component {
  state = {
    value: ''
  }
  render() {
    return (
      <CreateArticleStyles>
        <Title placeholder="請輸入標題"/>
        <MdEditor value={this.state.value} 
          onChange={(value) => { this.setState({
            value: value
          }); }} 
          onSave={(e) => { console.log(e);}}/>
      </CreateArticleStyles>
    )
  }
}

export default CreateArticle;