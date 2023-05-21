import "../styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list-item">
            <Link to="/aboutme" className="header__link">
              <button className="header__button">Sobre&nbsp;mí</button>
            </Link>
          </li>

          <li className="header__list-item">
            <Link to="/projects" className="header__link">
              <button className="header__button">Proyectos</button>
            </Link>
          </li>

          <li className="header__list-item">
            <Link to="/contact" className="header__link">
              <button className="header__button">Contacto</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
