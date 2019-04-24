import Link from 'next/link';
import styled from 'styled-components';

const PreNextButtonsStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  a {
    margin: 0 4px;
    padding: 4px 14px;
    border: 1px solid ${props => props.theme.lightgrey};
    cursor: pointer;
    transition: .3s;
    span {
      display: block;
      font-size: 12px;
      color: ${props => props.theme.smallgrey};
    }
    &.prev {
      text-align: left;
    }
    &.next {
      text-align: right;
    }
    &.none {
      visibility: hidden;
    }
    &:hover {
      color: white;
      background-color: ${props => props.theme.mainColor};
    }
  }
`;

const PreNextButtons = props => (
  <PreNextButtonsStyles>
    <Link href={{
      pathname: '/',
      query: { id: props.prev ? props.prev.id : '' }
    }}> 
      <a className={props.prev ? 'prev' : 'none'}>← 上一篇<span>{props.prev ? props.prev.title : ''}</span></a>
    </Link>
    <Link href={{
      pathname: '/',
      query: { id: props.next  ? props.next.id : '' }
    }}> 
      <a className={props.next ? 'next' : 'none'}>下一篇 →<span>{props.next ? props.next.title : ''}</span></a>
    </Link>
  </PreNextButtonsStyles>
);

export default PreNextButtons;