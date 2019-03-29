import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import ArticleCard from './ArticleCard';
import Pagination from './ArticlePagination';
import { perPage } from '../config';

const ALL_ARTICLES_QUERY = gql`
  query ALL_ARTICLES_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    articles(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      author {
        name
      }
      content
      image
    }
  }
`;

const ArticleList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

class Articles extends Component {
  render() {
    return (
        <>
          <Query
            query={ALL_ARTICLES_QUERY}
            // fetchPolicy="network-only" //可以避免apollo的cache 但會遺失效能
            variables={{
              skip: this.props.page * perPage - perPage,
            }}
          >
            {({ data, error, loading }) => {
              if (loading) return <p>Loading...</p>;
              if (error) return <p>Error: {error.message}</p>;
              return (
                <ArticleList>{data.articles.map(article => <ArticleCard article={article} key={article.id} />)}</ArticleList>
              );
            }}
          </Query>
          <Pagination page={this.props.page} />
        </>
    );
  }
}

export default Articles;
export { ALL_ARTICLES_QUERY };