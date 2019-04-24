import styled from 'styled-components';

const HomeLayout = styled.div`
	/* display: grid;
	grid-template-columns: 8fr 3fr; */
	display: flex;
	.articles-wrap {
		width: calc(100% - 280px);
		display: grid;
		justify-content: center;
  	align-items: center; 
	}
	.sidebar-wrap {
		min-width: 280px;
		background-color: rgba(255, 0, 0, 0.1);
	}
	@media screen and (max-width: ${props => props.theme.mediaPad}){
		.articles-wrap {
			width: 100%;
		}
		.sidebar-wrap {
			display: none;
		}
	}
`;

export default HomeLayout;