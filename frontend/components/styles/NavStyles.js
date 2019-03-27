import styled from 'styled-components';

const NavStyles = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  position: relative;
  a,
  button {
    padding: 0rem 1.6rem;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 1.6rem;
    background: none;
    border: 0;
    color: ${props => props.theme.black};
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    @media (max-width: 700px) {
      font-size: 1rem;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 2px;
      background: ${props => props.theme.lightgrey};
      height: 100%;
      left: 0;
      position: absolute;
      /* transform: skew(-20deg); */
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: ${props => props.theme.mainColor};
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 1rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 20px);
      }
    }
  }
  &:before {
    content: '';
    width: 2px;
    height: 100%;
    background-color: ${props => props.theme.lightgrey};
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  }
  @media (max-width: 1300px) {
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
