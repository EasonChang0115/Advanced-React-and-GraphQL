import UpdateItem from '../components/UpdateItem';
// 可以用withRouter來抓ID 或著 已經在 _app.js 把所有的 query 都傳進component了

let Update = props => (
	<div>
		<UpdateItem id={props.query.id}/>
	</div>
)

export default Update;