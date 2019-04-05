import styled from 'styled-components';

const MdEditorStyles = styled.nav`
  display: flex;
  flex-direction: column;
  height: 600px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  ul, ol, li{
    margin: 0;
    padding: 0;
  }
  .for-controlbar {
    display: flex;
    justify-content: space-between;
    padding: 0 6px;
    border-bottom: 1px solid #ddd;
    color: #555;
    user-select: none;
    background-color: rgba(0, 0, 0, 0.05);
    >ul {
      display: flex;

      li {
        display: flex;
        align-items: center;
        padding: 4px 6px;
        margin: 8px 4px;
        border-radius: 4px;
        line-height: normal;

        &.for-active {
          background: #ddd;
        }

        &:hover {
          cursor: pointer;
          background: #d8d8d8;
        }

        i {
          font-size: 1.2em;
        }
      }
    }
  }
  .for-editor {
    display: flex;
    justify-content: space-between;
    height: 100%;
    color: rgba(0, 0, 0, 0.65);
    border-radius: 0 0 4px 4px;
    overflow: hidden;
    .for-panel {
      height: 100%;
      flex: 1;
      width: 50%;
      overflow: auto;

      .for-preview {
        padding: 10px 14px;
        background: #fcfcfc;
      }
    }
    .for-editor-wrapper {
      line-height: 1.6;
      height: 100%;
      .for-editor-block {
        display: flex;
        justify-content: space-between;
        min-height: 100%;
        &.hidden {
          display: none;
        }
      }
      .for-line-num {
        list-style: none;
        background: #eee;
        padding: 8px 0 20%;
        min-width: 30px;
        text-align: center;
        &.hidden {
          display: none;
        }
        li {
          list-style: none;
        }

      }
      .for-editor-content {
        flex: 1;
        position: relative;
        height: 100%;
        margin-left: 10px;
        pre {
          padding: 8px 0;
          display: block;
          white-space: pre-wrap;
          word-wrap: break-word;
          visibility: hidden;
          margin: 0;
          font-family: inherit;
        }
        textarea {
          font-family: 'Consolas', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
          position: absolute;
          top: 0;
          bottom: 0;
          padding: 8px 0;
          font-family: inherit;
          display: block;
          height: 100%;
          width: 100%;
          overflow: hidden;
          resize: none;
          border: none;
          outline: none;
          font-size: inherit;
          color: rgba(0, 0, 0, 0.65);
          background: none;
          line-height: inherit;
        }
      }
    }
  }
`;


export default MdEditorStyles;