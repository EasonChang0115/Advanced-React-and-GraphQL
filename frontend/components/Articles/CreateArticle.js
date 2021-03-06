import React, { Component } from 'react';
import Router from 'next/router';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import moment from 'moment';
import { ALL_ARTICLES_QUERY } from './Articles';
import { PAGINATION_ARTICLE_QUERY } from './ArticlePagination';

import Error from '../ErrorMessage';
import Title from '../markdown/Title';
import TagBar from '../markdown/TagBar';
import MdEditor from '../markdown/MdEditor';
import Loading from '../Loading';
import SavaButtons from './SavaButtons';
import UploadImage from '../UploadImage';

const CREATE_ARTICLE_MUTATION = gql`
  mutation CREATE_ARTICLE_MUTATION(
    $title: String
    $content: String
    $image: String
  ) {
    createArticle(
      title: $title
      content: $content
      createdAt: $createdAt
      image: $image
    ) {
      id
    }
  }
`;

const CreateArticleStyles = styled.div`
  background-color: white;
  border: 1px solid #E5E5E5;
  position: relative;
`;

class CreateArticle extends Component {
  state = {
    title: '',
    content: '',
    image: '',
    tags: ['javascript']
  }
  handleImageChange = url => {
    this.setState({
      image: url
    });
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
  handleReleaeArticle = () => {
    console.log('release article');
  }
  render() {
    return (
      <Mutation
        mutation={CREATE_ARTICLE_MUTATION}
        variables={{
          title: this.state.title,
          content: this.state.content,
          image: this.state.image,
          createdAt: moment().format()
        }}
        refetchQueries={
          [{query: ALL_ARTICLES_QUERY},{query: PAGINATION_ARTICLE_QUERY}]
        }
      >
       {
         (createArticle, { loading, error }) => {
            return (
              <>
                <UploadImage imageUrl={this.state.image} setImageUrlFunc={this.handleImageChange} />
                <CreateArticleStyles>
                  <Error error={error} />  
                  <Title placeholder="在這裡幫文章下個好標題..." title={this.state.title} titleChangeFunc={this.handleTitleChange}/>
                  <MdEditor value={this.state.content} 
                    onChange={(value) => { this.setState({
                      content: value
                    });}}
                  />
                  <Loading loading={loading} />
                </CreateArticleStyles>
                <TagBar tags={this.state.tags} 
                  addtagFunc={this.handleAddTag} 
                  removetagFunc={this.handleremoveTag}
                />
                <SavaButtons disabled={loading} 
                  saveArticleFunc={async () => {
                    const res = await createArticle();
                    Router.push({
                      pathname: '/',
                      query: { id: res.data.createArticle.id }
                    });
                  }}
                  releaseArticleFunc={this.handleReleaeArticle}
                />
              </>
            )
         }
       }
      </Mutation>
    )
  }
}

export default CreateArticle;
export { CREATE_ARTICLE_MUTATION };
