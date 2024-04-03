import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import './header.css';

function Header() {
  return (
    <header className="page-header">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Header;
