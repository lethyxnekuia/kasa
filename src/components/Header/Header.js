import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import '../Header/Header.css';

const Header = () => {
  const location = useLocation()
  let pageMain = ""
  let pageAbout = ""
  if (location.pathname === "/"){
    pageMain = "pageMainActive"
  } 
  if (location.pathname === "/a-propos") {
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