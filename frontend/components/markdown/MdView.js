import React, { Component } from 'react';
import MdViewStyles from '../styles/MdViewStyles';
import marked from '../../lib/marked';

class MdView extends Component {
  static defaultProps = {
    value: '',
    isShow: true
  }
  render() {
    const { value, isShow } = this.props;
    return (
      <MdViewStyles isShow={isShow}>
        <div className="markdown-view">
          <div
            dangerouslySetInnerHTML={{ __html: marked(value) }}
          />
        </div>
      </MdViewStyles>
    );
  };
}

export default MdView;
