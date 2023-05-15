import "../styles/header.css";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import F11Menssage from "./F11Menssage";

function Header() {
  const IS_NOTEBOOK_OR_PC = !isMobile;

  return (
    <header class="header">
      {IS_NOTEBOOK_OR_PC && <F11Menssage />}

      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__list-item">
            <Link to="/aboutme" class="header__link">
              <button className="header__button">Sobre&nbsp;mi</button>
            </Link>
          </li>

          <li class="header__list-item">
            <Link to="/projects" class="header__link">
              <button className="header__button">Proyectos</button>
            </Link>
          </li>

          <li class="header__list-item">
            <Link to="/contact" class="header__link">
              <button className="header__button">Contacto</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
