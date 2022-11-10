import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import '../Header/Header.css';

const Header = () => {
  const urlParams  = window.location.href;
  let pageMain = ""
  let pageAbout = ""
  if (urlParams === "http://localhost:3000/"){
    pageMain = "pageMainActive"
  } 
  if (urlParams === "http://localhost:3000/a-propos") {
    pageAbout = "pageAboutActive"
  }
  return (
    <header>
      <NavLink to="/">
        <img src={Logo} alt="logo kasa" />
      </NavLink>
      <nav>
        <NavLink to="/">
          <p className={pageMain}>Accueil</p>
        </NavLink>
        <NavLink to="/a-propos">
          <p className={pageAbout}>A propos</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;