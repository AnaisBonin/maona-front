import { Link } from 'react-router-dom';

import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import instagram from '../../assets/icons/instagram.png';

import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <nav className="footer-nav">
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
          <ul>
            <li className="footer-sub-category">Vêtements semi-mesure</li>
            <li className="footer-sub-category">Accessoires</li>
          </ul>
          <Link to="collection/bebes">
            <li>Collection bébés</li>
          </Link>
          <ul>
            <li className="footer-sub-category">Bavoirs</li>
            <li className="footer-sub-category">Gigoteuses</li>
            <li className="footer-sub-category">Couvertures</li>
            <li className="footer-sub-category">Accessoires</li>
          </ul>
          <Link to="/panier">
            <li>Votre panier</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <div className="footer-socials">
        <img src={instagram} alt="Instagram logo icon" />
        <img src={facebook} alt="Facebook logo icon" />
        <img src={twitter} alt="Twitter logo icon" />
      </div>
    </footer>
  );
};

export default Footer;
