import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Error from './ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import MdView from './markdown/MdView';

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
    let string = "# Three.js 製作 3D 特效網頁（入門）\n\n\n\n\n\n### Three.js介紹\n\n* 在網頁上製作3D的函式庫\n\n* 基於 WebGL \n\n* 範例：互動專輯、品牌網頁、互動MV、視覺藝術\n\n![](https://i.imgur.com/J295JDf.jpg)\n\n\n\n---\n\n";
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
                <MdView value={ string } />
              </article>
            </SingleArticleStyles>)
           }
        }
      </Query>
    )
  };
}

export default SingleArticle;