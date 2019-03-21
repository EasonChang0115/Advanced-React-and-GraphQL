import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';


const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = (props) => (
  <Query fetchPolicy="network-only" query={PAGINATION_QUERY}>{
    ({data, error, loading}) => {
      if (error) return <p>Get pagination error</p>;
      if (loading) return <p>loading...</p>;
      const count = data.itemsConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      const page = props.page;
      return (
        <PaginationStyles>
          <Head>
            <title>Lit Blog {page} of {pages}</title>
          </Head>
          <Link prefetch href={{
            pathname: 'items',
            query: { page: page -1 }
          }}> 
            <a className="prev" aria-disabled={page <= 1}>← Prev</a>
          </Link>
          <p>
            Page {props.page} of {pages}!
          </p>
          <p>{count} Items Total</p>
          <Link prefetch href={{
            pathname: 'items',
            query: { page: page + 1 }
          }}> 
            <a className="prev" aria-disabled={page >= pages}>Next →</a>
          </Link>
        </PaginationStyles>
      )
    }
  }
  </Query>
);

export default Pagination;