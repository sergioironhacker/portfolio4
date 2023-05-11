import "../styles/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header class="header">
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__list-item">
            <Link to="/aboutme" class="header__link">
              <button className="header__button">Sobre mi</button>
            </Link>
          </li>

          <li class="header__list-item">
            <Link to="/projects" class="header__link">
              <button className="header__button">Proyectos</button>
            </Link>
          </li>

          <li class="header__list-item">
            <Link to="/contact" class="header__link">
              <button className="header__button">Contácto</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
