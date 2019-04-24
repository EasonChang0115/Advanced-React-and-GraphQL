import styled from 'styled-components';
const SavaButtonStyles = styled.div`
  display: flex;
  flex-shrink: 0;
  button {
    border: none;
    outline: none;
    margin: 0 4px;
    font-size: 14px;
    color: white;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    transition: .3s;
    &:hover {
      opacity: 0.5;
    }
  }
  button.save-article-btn {
    background-color: ${props => props.theme.saveColor}
  }
  button.release-article-btn {
    background-color: ${props => props.theme.releaseColor}
  }
  button.delete-article-btn {
    background-color: ${props => props.theme.deleteColor}
  }
`;
const SavaButtons = props => (
  <SavaButtonStyles>
    <button disabled={props.disabled} className="save-article-btn" onClick={props.saveArticleFunc}>儲存草稿</button>
    <button disabled={props.disabled} className="release-article-btn" onClick={props.releaseArticleFunc}>發布文章</button>
    <button disabled={props.disabled}
      className="delete-article-btn" 
      onClick={props.deleteArticleFunc}
      style={{display: props.deleteArticleFunc ? 'block' : 'none'}}
      >刪除文章</button>
  </SavaButtonStyles>
)

export default SavaButtons 
