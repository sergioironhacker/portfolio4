import "../header/header.css";
import ItemHeader from "./ItemHeader";

function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <ItemHeader route="/aboutme" text="Sobre&nbsp;mí" />

          <ItemHeader route="/projects" text="Proyectos" />

          <ItemHeader route="/contact" text="Contacto" />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
