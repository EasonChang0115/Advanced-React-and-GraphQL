import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import { ALL_ARTICLES_QUERY } from './Articles';
import { PAGINATION_ARTICLE_QUERY } from './ArticlePagination';


const DELETE_ARTICLE_MUTATION = gql`
  mutation DELETE_ARTICLE_MUTATION($id: ID!) {
    deleteArticle(id: $id) {
      id
    }
  }
`;

class DeleteArticle extends Component {
  render() {
    return (
      <Mutation
        mutation={DELETE_ARTICLE_MUTATION} 
        variables={{
          id: this.props.deleteId
        }}
        refetchQueries={
          [{query: ALL_ARTICLES_QUERY},{query: PAGINATION_ARTICLE_QUERY}]
        }
      >
         {(deleteArticle, { error }) => (
          <button
            disabled={this.props.disabled}
            className="delete-article-btn"
            style={{display: this.props.deleteId ? 'block' : 'none'}}
            onClick={async () => {
              if (confirm('Are you sure you want to delete this article?')) {
                await deleteArticle();
                Router.push({ pathname: '/' });
              };
            }}
          >
            {this.props.children}
          </button>
        )}
      </Mutation>
    )
  }
}

export default DeleteArticle;
