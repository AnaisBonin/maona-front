import { Link } from 'react-router-dom';

import menu from '../../assets/icons/menu.png';
import logo from '../../assets/logo/maona-logo.png';
import bag from '../../assets/icons/bag.png'

import './Header.css';

const Header = () => {
  return <header>
    <div className="header-logos">
      <img src={menu} className="header-menu-logo" alt="icon of a menu" />
      <div className="maona-logo">
        <img src={logo} alt="Maona logo with flowers" />
      </div>
      <img src={bag} className="header-shopping-logo" alt="icon of a shopping bag" />
    </div>
    <nav className="header-nav">
      <ul>
        <Link to='/'><li>Accueil</li></Link>
        <Link to='maona'><li>Maona</li></Link>
        <Link to='collection/femmes'><li>Collection femmes</li></Link>
        <Link to='collection/bebes'><li>Collection bébés</li></Link>
        <Link to='/blog'><li>Blog</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>
    </nav>
  </header>;
};

export default Header;
