import Link from 'next/link';
import Articles from '../components/Articles';
let Home = props => (
	<div className="lit-blog-home">
		<div className="articles-wrap">
			<Articles page={ parseFloat(props.query.page) || 1}/>
		</div>
		<div className="sidebar-wrap">
		</div>
	</div>
)

export default Home;