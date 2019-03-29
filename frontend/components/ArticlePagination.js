import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Head from 'next/head';
import Link from 'next/link';
import PaginationStyles from './styles/PaginationStyles';
import { perPage } from '../config';


const PAGINATION_ARTICLE_QUERY = gql`
  query PAGINATION_ARTICLE_QUERY {
    articlesConnection {
      aggregate {
        count
      }
    }
  }
`;

const Pagination = (props) => (
  <Query query={PAGINATION_ARTICLE_QUERY}>{
    ({data, error, loading}) => {
      if (error) return <p>Get pagination error</p>;
      const count = data.articlesConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      const page = props.page;
      return (
        <PaginationStyles>
          <Head>
            <title>Lit Blog {page} of {pages}</title>
          </Head>
          <Link prefetch href={{
            pathname: '',
            query: { page: page -1 }
          }}> 
            <a className="prev" aria-disabled={page <= 1}>← Prev</a>
          </Link>
          <p>
            Page {props.page} of {pages}!
          </p>
          <p>{count} Items Total</p>
          <Link prefetch href={{
            pathname: '',
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
export { PAGINATION_ARTICLE_QUERY };