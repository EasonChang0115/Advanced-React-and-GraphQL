import styled from 'styled-components';

const ArticleCardStyles = styled.article`
  display: grid;
  grid-template-columns: 5fr 7fr;
  transition: .3s;
  .image-box {
    padding: 0px 15px;
    cursor: pointer;
    img {
      width: 100%;
      height: 200px;
      object-fit: contant;
      border-radius: 3px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
      transition: .3s;
    }
  }
  .article-link {
      cursor: pointer;
    }
  .information-box {
    h2.card-title {
      font-size: 2.5rem;
      margin: 8px 0;
    }
    .card-content {
      p {
        margin: 0px;
        display: -webkit-box;
        overflow: hidden;
        font-size: 1.4rem;
        color: #999999;
        line-height: 1.5;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
      a.article-link {
        color: ${props => props.theme.mainColor};
        font-size: 1.4rem;
      }
    }
    h4.author {
      margin: 8px 0px;
      font-size: 1.4rem;
      font-weight: 900px;
      span {
        font-weight: 400px;
        color: #999999;
        margin: 0px 8px;
      }
    }
  }
  &:hover {
    border-radius: 5px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    .image-box {
      img {
        transform: translateY(-10px);
        box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
      }
    }
  }
  @media screen and (max-width: ${props => props.theme.mediaPhone}){
    grid-template-columns: 100%;
    .information-box {
      padding: 0px 15px;
    }
  }
`
export default ArticleCardStyles;