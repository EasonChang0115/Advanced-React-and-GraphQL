import React, { Component } from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from '../ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import MdView from '../markdown/MdView';
import PreNextButtons from './PreNextButtons';
import moment from 'moment';

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
    h1.title {
      margin: 0;
      color: #555555;
      text-align: left;
      padding: 0px 0.8rem;
    }
    .create-time {
        font-size: 1.4rem;
        color: #696969;
        padding: 0px 0.8rem;
        text-align: right;
        .edit {
          margin-left: 0.8rem;
          color: ${props => props.theme.mainColor};
        }
      }
    margin: 1.5rem 0 3rem 0;
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
      createdAt
      author {
        id
        name
      }
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
        createdAt
        author {
          id
          name
        }
      }
      nextArticle {
        id
        title
      }
    }
  }
`;

class SingleArticle extends Component {
  state = {
    userId: null
  }
  componentDidMount() {
    this.setState({
      userId: localStorage.getItem('userId')
    });
  }
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
            let editBlock = null;
            if (this.state.userId && this.state.userId === article.author[0].id) {
              editBlock = <Link href={{
                  pathname: '/article',
                  query: { id: article.id }
                }}>
                <a className="edit">編輯</a>
              </Link>
            }
            return (
            <SingleArticleStyles>
              <Head>
                <title>Lit Fits | { article.title }</title>
                <meta name="description" content={ article.content }/>
              </Head>
              <img src={ article.image } alt={ article.title }/>
              <article className="details">
                <h1 className="title">
                  { article.title }
                </h1>
                <div className="create-time">
                  { moment(article.createdAt).format('YYYY-MM-DD HH:ss:mm') }
                  { editBlock }
                </div>
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