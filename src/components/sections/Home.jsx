import "../../styles/home.css";

function Home() {
  return (
    <main className="home">
      <header className="header">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__list-item">
              <a href="#aboutme" className="header__link">
                Sobre&nbsp;mí
              </a>
            </li>
            <li className="header__list-item">
              <a href="#projects" className="header__link">
                Proyectos
              </a>
            </li>
            <li className="header__list-item">
              <a href="#contact" className="header__link">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <p id="Estoy para que no se rompa el estilo"></p>

      <section className="section__home">
        <article id="home__container">
          <h1 className="home__title">Giovanni Liotta</h1>
          <h2 className="home__title">Web Developer</h2>
        </article>
      </section>

      <footer className="footer">
        <p className="footer__status">Estado&nbsp;</p>
        <svg
          width="16px"
          height="16px"
          viewBox="0 0 24 24"
          fill="none"
          alt="circulo"
        >
          <path
            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
            fill="#4acb4a"
          />
        </svg>
        <p className="footer__active">&nbsp;Activo</p>
      </footer>
    </main>
  );
}

export default Home;
