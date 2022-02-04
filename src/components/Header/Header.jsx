import { Link } from 'react-router-dom';
import { useState } from 'react';

import { useApp } from '../../contexts/AppProvider';
import menu from '../../assets/icons/menu.png';
import logo from '../../assets/logo/maona-logo.png';
import bag from '../../assets/icons/bag.png';

import './Header.css';

const Header = () => {
  const { totalQuantity } = useApp();
  const [menuDisplayed, setMenuDisplayed] = useState(false);

  const handleClick = () => setMenuDisplayed(!menuDisplayed);

  return (
    <header>
      <div className="header-logos">
        <button
          type="button"
          className={menuDisplayed ? 'button-active' : ''}
          onClick={handleClick}>
          <img src={menu} className="header-menu-logo" alt="icon of a menu" />
        </button>
        <div className="maona-logo">
          <Link to="/">
            <img src={logo} alt="Maona logo with flowers" />
          </Link>
        </div>
        <Link to="/panier" onClick={() => setMenuDisplayed(false)}>
          <img
            src={bag}
            className="header-shopping-logo"
            alt="icon of a shopping bag"
          />
          { totalQuantity > 0 ? 
            ( <p className="header-shopping-quantity">{totalQuantity}</p> )
            : ''
          }
        </Link>

      </div>
      {menuDisplayed && (
        <nav
          className={menuDisplayed ? 'header-nav' : 'header-nav menu-hidden'}
          onClick={handleClick}>
          <ul>
            <Link to="/">
              <li>Accueil</li>
            </Link>
            <Link to="maona">
              <li>Maona</li>
            </Link>
            <Link to="collection/femmes">
              <li>Collection femmes</li>
            </Link>
            <Link to="collection/bebes">
              <li>Collection bébés</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
