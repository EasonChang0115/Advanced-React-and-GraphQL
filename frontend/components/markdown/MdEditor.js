import React, { Component } from 'react';
import Head from 'next/head';
import MdEditorStyles from '../styles/MdEditorStyles';
import MdView from './MdView';
import textInsert from '../../lib/insertText';
import keydownListen from '../../lib/keydownListen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MdEditor extends Component {
  constructor(props) {
    super(props);
    this.$vm = null;
    this.handleEditorRef = $vm => {this.$vm = $vm;};
    this.state = {
      preview: false,
      f_history: [],
      f_history_index: 0,
      line_index: 1
    };
  }
  static defaultProps = {
    placeholder: '請輸入內容',
    lineNum: true
  }
  componentDidMount() {
    keydownListen(this);
  }
  componentWillUpdate(props, state) {
    const { f_history } = this.state;
    if (props.value && state.f_history.length === 0) {
      f_history.push(props.value);
      this.setState({
        f_history
      });
      this.handleLineIndex(props.value);
    }
  }
  handleChange = e => {
    const value = e.target.value;
    this.saveHistory(value);
    this.props.onChange(value);
  }
  // 快速鍵
  insert = e => {
    const { $vm } = this;
    const type = e.currentTarget ? e.currentTarget.getAttribute('data-type') : e;
    textInsert($vm, type);
    this.props.onChange($vm.value);
    this.saveHistory($vm.value);
  }
  // 紀錄
  saveHistory(value) {
    let { f_history, f_history_index } = this.state;
    window.clearTimeout(this.currentTimeout);
    this.currentTimeout = setTimeout(() => {
      //  撤銷後修改 刪除當前以後紀錄
      if (f_history_index < f_history.length - 1) {
        f_history.splice(f_history_index + 1)
      }
      // 超出记录最多保存数后，滚动储存
      if (f_history.length >= 20) {
        f_history.shift()
      }
      // 记录当前位置
      f_history_index = f_history.length
      f_history.push(value)
      this.setState({
        f_history,
        f_history_index
      })
    }, 500);
    // 幾行
    this.handleLineIndex(value);
  }
  handleLineIndex(value) {
    const line_index = value ? value.split('\n').length : 1;
    this.setState({
      line_index
    });
  }
  undo = () => {
    const { f_history } = this.state;
    let { f_history_index } = this.state;
    f_history_index = f_history_index - 1;
    if (f_history_index < 0) return;
    this.setState({
      f_history_index
    })
    const value = f_history[f_history_index];
    this.props.onChange(value);
    this.handleLineIndex(value);
  }
  redo = () => {
    const { f_history } = this.state;
    let { f_history_index } = this.state;
    f_history_index = f_history_index + 1;
    if (f_history_index >= f_history.length) return;
    this.setState({
      f_history_index
    });
    const value = f_history[f_history_index];
    this.props.onChange(value);
    this.handleLineIndex(value);
  }
  // 預覽
  preview = () => {
    this.setState({
      preview: !this.state.preview
    });
  }
  // 聚焦
  focusText = () => {
    const { $vm } = this;
    $vm.focus();
  }
  render() {
    const { preview, line_index } = this.state;
    const { value } = this.props;
    const lineNum = function() {
      const list = [];
      for (let i = 0; i < line_index; i++) {
        list.push(<li key={i + 1}>{i + 1}</li>)
      };
      return <ul className="line-num">{list}</ul>;
    }
    return (
      <MdEditorStyles>
        <Head>
          <link rel="stylesheet" type="text/css" href="/static/tomorrow.css" />
        </Head>
        <div className="controlbar">
          <ul>
            <li onClick={this.undo} title="上一步 (ctrl+z)">
              <FontAwesomeIcon icon="undo-alt"></FontAwesomeIcon>
            </li>
            <li onClick={this.redo} title="下一步 (ctrl+y)">
              <FontAwesomeIcon icon="redo-alt"></FontAwesomeIcon>
            </li>
            <li data-type="h1" onClick={this.insert} title="H1">
              H1
            </li>
            <li data-type="h2" onClick={this.insert} title="H2">
              H2
            </li>
            <li data-type="h3" onClick={this.insert} title="H3">
              H3
            </li>
            <li data-type="h4" onClick={this.insert} title="H4">
              H4
            </li>
            <li data-type="image" onClick={this.insert} title="圖片">
              <FontAwesomeIcon icon="image"></FontAwesomeIcon>
            </li>
            <li data-type="link" onClick={this.insert} title="超連結">
              <FontAwesomeIcon icon="link"></FontAwesomeIcon>
            </li>
            <li data-type="code" onClick={this.insert} title="程式碼片段">
              <FontAwesomeIcon icon="code"></FontAwesomeIcon>
            </li>
            <li data-type="reference" onClick={this.insert} title="引用">
              <FontAwesomeIcon icon="quote-left"></FontAwesomeIcon>
            </li>
          </ul>
          <ul>
            <li className={preview ? 'for-active' : ''} onClick={this.preview}>
              預覽
            </li>
          </ul>
        </div>
        <div className="editor">
          <div className="panel" tabIndex="-1" onFocus={this.focusText}>
            <div className="editor-wrapper">
              <div className={!preview ? 'editor-block' : "editor-block hidden"}>
                {lineNum()}
                <div className="editor-content">
                  <pre>{value}</pre>
                  <textarea
                    ref={this.handleEditorRef}
                    value={value}
                    onChange={this.handleChange}
                    placeholder={this.props.placeholder}
                  />
                </div>
              </div>
              <MdView value={value} isShow={preview}/>
            </div>
          </div>
        </div>
      </MdEditorStyles>
    )
  }
}

export default MdEditor
