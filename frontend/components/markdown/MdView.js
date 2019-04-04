import React, { Component } from 'react';
import styled from 'styled-components';
import marked from '../../lib/marked';


const MdViewStyles = styled.div`
  display: ${props => props.isShow ? 'flex' : 'none'};
`;

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
    )
  }
}

export default MdView;
