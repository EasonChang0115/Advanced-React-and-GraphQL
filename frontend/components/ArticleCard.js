import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ArticleCard extends Component {
  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <p>{this.props.article.title}</p>
      </div>
    );
  }
}

export default ArticleCard;