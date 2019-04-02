import styled from 'styled-components';
import Articles from '../components/Articles';
import HomeLayout from '../components/styles/HomeLayout';
import SingleArticle from '../components/SingleArticle';

let Home = props => {
	return (<HomeLayout>
		<div className="articles-wrap">
			{
				props.query.id ? <SingleArticle id={props.query.id}/> : 
				<Articles page={ parseFloat(props.query.page) || 1}/>
			}
		</div>
		<div className="sidebar-wrap">
		</div>
	</HomeLayout>)
}

export default Home;