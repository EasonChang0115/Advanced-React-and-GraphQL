import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './markdown/Title';
import TagBar from './markdown/TagBar';
import MdEditor from './markdown/MdEditor';

const CreateArticleStyles = styled.div`
  background-color: white;
  border: 1px solid #E5E5E5;
`;

class CreateArticle extends Component {
  state = {
    title: '',
    content: '',
    tags: ['jacascript']
  }
  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  }
  handleAddTag = tag => {
    let newArray = [...this.state.tags];
    newArray.push(tag);
    this.setState({
      tags: newArray
    });
  }
  handleremoveTag = index => {
    let newArray = [...this.state.tags];
    newArray.splice(index, 1);
    this.setState({
      tags: newArray
    });
  }
  handleSaveArticle = () => {
    console.log('save article');
  }
  handleReleaeArticle = () => {
    console.log('release article');
  }
  render() {
    return (
      <>
        <CreateArticleStyles>
          <Title placeholder="在這裡幫文章下個好標題..." title={this.state.title} titleChangeFunc={this.handleTitleChange}/>
          <MdEditor value={this.state.value} 
            onChange={(value) => { this.setState({
              content: value
            }); }} 
            onSave={(e) => { console.log(e);}}/>
        </CreateArticleStyles>
        <TagBar tags={this.state.tags} 
          addtagFunc={this.handleAddTag} 
          removetagFunc={this.handleremoveTag}
          saveFunc={this.handleSaveArticle}
          releaseFunc={this.handleReleaeArticle}
        />
      </>
    )
  }
}

export default CreateArticle;