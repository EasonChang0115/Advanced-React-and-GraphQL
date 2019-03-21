import SingleItem from '../components/SingleItem';

let item = props => (
	<div>
		<SingleItem id={props.query.id}></SingleItem>
	</div>
)

export default item;