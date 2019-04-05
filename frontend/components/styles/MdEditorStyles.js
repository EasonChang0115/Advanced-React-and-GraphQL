import styled from 'styled-components';

const MdEditorStyles = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  font-size: 14px;
  ul, ol, li{
    margin: 0;
    padding: 0;
  }
  .controlbar {
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
  .editor {
    display: flex;
    justify-content: space-between;
    height: 600px;
    color: rgba(0, 0, 0, 0.65);
    border-radius: 0 0 4px 4px;
    overflow: hidden;
    .panel {
      height: 100%;
      flex: 1;
      width: 50%;
      overflow: auto;
    }
    .editor-wrapper {
      line-height: 1.6;
      height: 100%;
      .editor-block {
        display: flex;
        justify-content: space-between;
        min-height: 100%;
        &.hidden {
          display: none;
        }
        .line-num {
          list-style: none;
          background: #eee;
          padding: 8px 0 5%;
          min-width: 30px;
          text-align: center;
          &.hidden {
            display: none;
          }
          li {
            list-style: none;
          }
        }
        .editor-content {
          flex: 1;
          position: relative;
          margin-left: 10px;
          pre {
            padding: 8px 0;
            display: block;
            white-space: pre-wrap;
            word-wrap: break-word;
            visibility: hidden;
            margin: 0;
            font-size: 1.4rem;
          }
          textarea {
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
            font-size: 1.4rem;
            color: rgba(0, 0, 0, 0.65);
            background: none;
            line-height: inherit;
          }
        }
      }
    }
  }
`;


export default MdEditorStyles;