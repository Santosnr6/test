import Cart from '../cart/Cart';
import Logo from '../logo/Logo';
import './header.css';

function Header({ cartBalance }) {
  return (
    <header className="page-header">
        <Logo />
        <Cart cartBalance={ cartBalance } />
    </header>
  )
}

export default Header;
