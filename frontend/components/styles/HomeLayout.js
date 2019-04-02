import styled from 'styled-components';

const HomeLayout = styled.div`
	display: grid;
	grid-template-columns: 8fr 3fr;
	.articles-wrap {
		display: grid;
		justify-content: center;
  	align-items: center; 
	}
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

export default HomeLayout;