import Link from 'next/link';
import Items from '../components/Items';
let items = props => (
	<div>
		<Items page={ parseFloat(props.query.page) || 1 }/>
	</div>
)

export default items;