import styled from 'styled-components';
import Articles from '../components/Articles';

const HomeLayout = styled.div`
	display: grid;
	grid-template-columns: 8fr 3fr;
	.sidebar-wrap {
		background-color: rgba(255, 0, 0, 0.1);
	}
	@media screen and (max-width: ${props => props.theme.mediaPad}){
		grid-template-columns: 100%;
		.sidebar-wrap {
			display: none;
		}
	}
`;

let Home = props => (
	<HomeLayout>
		<div className="articles-wrap">
			<Articles page={ parseFloat(props.query.page) || 1}/>
		</div>
		<div className="sidebar-wrap">
		</div>
	</HomeLayout>
)

export default Home;