import Link from 'next/link';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ArticleCard from '../components/ArticleCard';
import { perPage } from '../config';

const ALL_ARTICEL_QUERY = gql`
  query ALL_ARTICEL_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      content
      image
			author {
				name
			}
    }
  }
`;

let Home = props => (
	<div className="lit-blog-home">
		<div className="articles-wrap">

		</div>
		<div className="sidebar-wrap">
		</div>
	</div>
)

export default Home;