import { Query } from 'react-apollo';
import gql from 'graphql-tag';
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
    ({ data, error }) => {
      if (error) return <p>Get pagination error</p>;
      const count = data.articlesConnection.aggregate.count;
      const pages = Math.ceil(count / perPage);
      const page = props.page;
      const pageTag = [];
      for (let i = 1; i <= pages; i += 1 ) {
        pageTag.push(<Link prefetch key={i} href={{
          pathname: '',
          query: { page: i }
        }}> 
          <a className={i === page ? 'page active' : 'page'}>{ i }</a>
        </Link>);
      }
      return (
        <PaginationStyles>
          <Link prefetch href={{
            pathname: '',
            query: { page: page -1 }
          }}> 
            <a className="prev" aria-disabled={page <= 1}>← Prev</a>
          </Link>
          {pageTag}
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