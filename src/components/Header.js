import HeaderImage from '../assets/robots_lindos.jpg';
import { FormattedMessage } from 'react-intl';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <h1><FormattedMessage id="header.title" /></h1>
      <img src={HeaderImage} alt = "robots lindos"/>
    </header>
  );
}

export default Header;