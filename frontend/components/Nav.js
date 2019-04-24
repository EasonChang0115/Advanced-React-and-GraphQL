import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';

const Nav = () => (
  <User>
    {({data: { me }}) => (
      <NavStyles>
        <Link href="/">
          <a>首頁</a>
        </Link>
        <Link href="/items">
          <a>Shop</a>
        </Link>
        {
          me && (
            <>
              <Link href="/sell">
                <a>Sell</a>
              </Link>
              <Link href="/orders">
                <a>Orders</a>
              </Link>
              <Link href="/article">
                <a>新增文章</a>
              </Link>
              <Signout></Signout>
            </>
          )
        }
        {
          !me &&(
            <>
              <Link href="/me">
                <a>關於我</a>
              </Link>
              <Link href="/signup">
                <a>Sign In</a>
              </Link>
            </>
          )
        }
      </NavStyles>
    )}
  </User>
	
)

export default Nav;