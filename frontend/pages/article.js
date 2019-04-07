import CreateArticle from '../components/Articles/CreateArticle';
import UpdateArticle from '../components/Articles/UpdateArticle';

let articleEdit = props => props.query.id ? <UpdateArticle id={props.query.id}/> : <CreateArticle />;
export default articleEdit;