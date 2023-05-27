import "../header/header.css";
import ItemHeader from "./ItemHeader";

function Header(showAnimation) {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__list">
          <ItemHeader
            showAnimation={showAnimation}
            route="/aboutme"
            text="Sobre&nbsp;mí"
          />

          <ItemHeader
            showAnimation={showAnimation}
            route="/projects"
            text="Proyectos"
          />

          <ItemHeader
            showAnimation={showAnimation}
            route="/contact"
            text="Contacto"
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
