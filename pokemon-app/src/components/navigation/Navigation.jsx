import NavItem from '../navItem/NavItem';
import './navigation.css';

function Navigation() {
    const navItems = [
        'Pokédex',
        'Team generator',
        'Search pokémon'
    ];

  return (
    <nav className="navigation">
        <ul className="navigation-list">
            {
                navItems.map((navItem, index) => {
                    return <NavItem 
                               title={ navItem }
                               key={ index }
                           />
                })
            }
        </ul>
    </nav>
  )
}

export default Navigation;
