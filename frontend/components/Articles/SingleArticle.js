import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import MdView from '../markdown/MdView';
import PreNextButtons from './PreNextButtons';

const SingleArticleStyles = styled.div`
  margin: 0;
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

const SINGLE_PAGE_ARTICLE_QUERY = gql`
  query SINGLE_PAGE_ARTICLE_QUERY($id: ID!) {
    pageArticles(id: $id) {
      preArticle {
        id
        title
      }
      nowArticle {
        id
        title
        content
        image
      }
      nextArticle {
        id
        title
      }
    }
  }
`;

class SingleArticle extends Component {
  render() {
    return (
      <Query 
        query={ SINGLE_PAGE_ARTICLE_QUERY }
        variables={{ id: this.props.id }}>{
          ({ data, error, loading }) => {
            if (error) return <Error error={ error } />
            if (loading) return <p>Loading....</p>
            if (!data.pageArticles) return <p>No item found for { this.props.id }</p>
            const article = data.pageArticles.nowArticle;
            return (
            <SingleArticleStyles>
              <Head>
                <title>Lit Fits | { article.title }</title>
                <meta name="description" content={ article.content }/>
              </Head>
              <img src={ article.image } alt={ article.title }/>
              <article className="details">
                <MdView value={ article.content } />
              </article>
              <PreNextButtons prev={data.pageArticles.preArticle} next={data.pageArticles.nextArticle}/>
            </SingleArticleStyles>)
           }
        }
      </Query>
    )
  };
}

export default SingleArticle;
export { SINGLE_ARTICLE_QUERY, SINGLE_PAGE_ARTICLE_QUERY};