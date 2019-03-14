import Link from 'next/link';
let Home = props => (
	<div>
		<h1>Home</h1>
		<Link href="/product">
			<a>Product</a>
		</Link>
	</div>
)

export default Home;