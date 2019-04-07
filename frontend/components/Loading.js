
import styled from 'styled-components';

const LoadingStyle = styled.div`
  .loading-mock {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.4);
    display: none;
    justify-content: center;
    align-items: center;
    &.active {
      display: flex;
    }
  }
`;


const Loading = props => (
  <LoadingStyle>
    <div className={props.loading ? 'loading-mock active' : 'loading-mock'}>
      <img src="/static/loading.svg" alt="loading" width="200px"/>
    </div>
  </LoadingStyle>
)

export default Loading;