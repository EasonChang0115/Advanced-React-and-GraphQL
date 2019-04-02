import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  border-radius:5px;
  & > * {
    margin: 0 4px;
    padding: 4px 14px;
    border: 1px solid ${props => props.theme.lightgrey};
    cursor: pointer;
  }
  a.page {
    transition: .3s;
    &.active {
      pointer-events: none;
      cursor: not-allowed;
      background-color: ${props => props.theme.lightgrey};
    }
    &:hover {
      color: white;
      background-color: ${props => props.theme.mainColor};
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
    cursor: not-allowed;
  }
`;

export default PaginationStyles;
