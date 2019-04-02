import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import ReactMarkdown from "react-markdown";
import Head from 'next/head';

const SingleArticleStyles = styled.div`
  min-height: 100%;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: flex;
  flex-direction: column;
  padding: 0 8px;
  img {
    width: 100%;
    max-height: 320px;
    object-fit: cover;
  }
  .details {
    margin: 3rem 1.5rem;
    font-size: 2rem;
  }
`;
const SINGLE_ARTICLE_QUERY = gql`
  query SINGLE_ARTICLE_QUERY($id: ID!) {
    article(where: {id : $id}) {
      id
      title
      content
      image
    }
  }
`;

class SingleArticle extends Component {
  render() {
    return (
      <Query 
        query={ SINGLE_ARTICLE_QUERY } 
        variables={{ id: this.props.id }}>{
          ({ data, error, loading }) => {
            if (error) return <Error error={ error } />
            if (loading) return <p>Loading....</p>
            if (!data.article) return <p>No item found for { this.props.id }</p>
            const article = data.article;
            return (
            <SingleArticleStyles>
              <Head>
                <title>Lit Fits | { article.title }</title>
                <meta name="description" content={ article.content }/>
              </Head>
              <img src={ article.image } alt={ article.title }/>
              <article className="details">
                <ReactMarkdown source={ article.content } />
              </article>
            </SingleArticleStyles>)
           }
        }
      </Query>
    )
  };
}

export default SingleArticle;