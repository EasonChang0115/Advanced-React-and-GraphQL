import Link from 'next/link';

const Nav = () => (
	<div>
    <Link href="/">
			<a>Home</a>
		</Link>
		<Link href="/product">
      <a>Product</a>
    </Link>
	</div>
)

export default Nav;