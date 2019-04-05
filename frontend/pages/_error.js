import Link from 'next/link';
import styled from 'styled-components';

const ErrorPageStyles = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  .backgroundImage {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://res.cloudinary.com/dpy8roliv/image/upload/v1554467142/Litfits/404.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    opacity: 0.4;
    }
  h2 {
    
  }
`;

const errorPage = () => (
  <ErrorPageStyles>
    <div className="backgroundImage"></div>
    <h2>This page could not be found. 404 error!</h2>
  </ErrorPageStyles>
);
 
export default errorPage;