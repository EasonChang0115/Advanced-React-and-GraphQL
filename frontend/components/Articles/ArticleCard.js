import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import ArticleCardStyle from '../styles/ArticleCard';

let LinkTag = props => (
  <Link prefetch href={{
    pathname: '/',
    query: { id: props.id }
  }}
  >
    {props.children}
  </Link>
)

class ArticleCard extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    let { id, title, author, image, content, createdAt } = this.props.article;
    return (
      <ArticleCardStyle>
        <div className="image-box">
          <LinkTag id={id}> 
            <img src={image} alt={title} width="100%"/>
          </LinkTag>
        </div>
        <div className="information-box">
          <h2 className="card-title">
            <LinkTag id={id}> 
              <a>{title}</a>
            </LinkTag>
          </h2>
          <div className="card-content">
            <p>{content.slice(0, 200)}</p>
            <LinkTag id={id}><a className="article-link">閱讀全文</a></LinkTag>
          </div>
          <h4 className="author">By {author.name}<span>{createdAt.slice(0, 10)}</span></h4>
        </div>
      </ArticleCardStyle>
    );
  };
}

export default ArticleCard;