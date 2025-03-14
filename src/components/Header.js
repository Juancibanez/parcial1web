import HeaderImage from '../assets/robots_lindos.jpg';
import './Header.css';

function Header() {
  return (
    <header className="header-container">
      <h1>Adopta un Robot con Robot Lovers!</h1>
      <img src={HeaderImage} alt = "robots lindos"/>
    </header>
  );
}

export default Header;