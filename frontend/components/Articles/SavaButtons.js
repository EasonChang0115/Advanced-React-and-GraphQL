import styled from 'styled-components';
import DeleteArticleButton from './DeleteArticleButton'

const SavaButtonStyles = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-shrink: 0;
  margin-top: 1.5rem;
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
    <DeleteArticleButton disabled={props.disabled} deleteId={props.articleID}>刪除文章</DeleteArticleButton>
  </SavaButtonStyles>
)

export default SavaButtons 
