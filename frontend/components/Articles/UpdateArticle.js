import React, { Component } from 'react';
import Router from 'next/router';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Error from '../ErrorMessage';
import Title from '../markdown/Title';
import TagBar from '../markdown/TagBar';
import MdEditor from '../markdown/MdEditor';
import Loading from '../Loading';

const SINGLE_ARTICLE_QUERY = gql`
  query SINGLE_ARTICLE_QUERY($id: ID!) {
    article(where: { id: $id }) {
      id
      title
      content
      image
    }
  }
`;

const UPDATE_ARTICLE_MUTATION = gql`
  mutation UPDATE_ARTICLE_MUTATION(
    $id: ID!
    $title: String
    $content: String
    $image: String
  ) {
    updateArticle(
      id: $id
      title: $title
      content: $content
      image: $image
    ) {
      id
    }
  }
`;

const UpdateArticleStyles = styled.div`
  background-color: white;
  border: 1px solid ${props => props.theme.mainColor};
  position: relative;
`;

class UpdateArticleMutation extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: this.props.article.title,
      content: this.props.article.content,
      image: this.props.article.image,
      tags: ['jacascript']
    }
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
      <Mutation
        mutation={UPDATE_ARTICLE_MUTATION}
        variables={{
          id: this.props.article.id,
          title: this.state.title,
          content: this.state.content,
          image: this.state.image,
        }}
      >
      {
        (updateArticle, { loading, error }) => {
            return (
              <>
                <UpdateArticleStyles>
                  <Error error={error} />
                  <Title placeholder="在這裡幫文章下個好標題..." title={this.state.title} titleChangeFunc={this.handleTitleChange}/>
                  <MdEditor value={this.state.content} 
                    onChange={(value) => {this.setState({
                      content: value
                    }); }}
                  />
                  <Loading loading={loading} />
                </UpdateArticleStyles>
                <TagBar tags={this.state.tags} 
                  addtagFunc={this.handleAddTag} 
                  removetagFunc={this.handleremoveTag}
                  disabled = {loading}
                  saveFunc={async () => {
                    const res = await updateArticle();
                    Router.push({
                      pathname: '/',
                      query: { id: res.data.updateArticle.id }
                    })
                  }}
                  releaseFunc={this.handleReleaeArticle}
                />
              </>
            )
        }
      }
      </Mutation>
    )
  }
}

const UpdateArticleQuery = (props) => (
<Query query={SINGLE_ARTICLE_QUERY} variables={{id: props.id}}>
{
  ({data, loading}) => {
    if (loading) return <Loading loading={loading} />;
    if (!data.article) return <p>No article found for ID {props.id}</p>;
    return <UpdateArticleMutation article={data.article}/>
  }
}
</Query>)

export default UpdateArticleQuery;
export { CREATE_ARTICLE_MUTATION };
