import "../../styles/home.css";
import { BsChevronDoubleDown as ArrowDown } from "react-icons/bs";
import reactImg from "../../assets/svgs/react.svg";
import nextImg from "../../assets/svgs/next.svg";
import nodeImg from "../../assets/svgs/node.svg";
import firebaseImg from "../../assets/svgs/firebase.svg";
import mongoImg from "../../assets/svgs/mongo.svg";
import cssImg from "../../assets/svgs/css.svg";
import htmlImg from "../../assets/svgs/html.svg";
import tailwindImg from "../../assets/svgs/tailwind.svg";
import styledImg from "../../assets/svgs/styled.svg";
import jsImg from "../../assets/svgs/js.svg";
import gitImg from "../../assets/svgs/git.svg";
import viteImg from "../../assets/svgs/vite.svg";
import expoImg from "../../assets/svgs/expo.svg";

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

      <p className="Estoy para que no se rompa el estilo" />

      <main className="section__home">
        <div className="home__title">
          <p style={{ textAlign: "start", width: "100%", marginRight: "2em" }}>
            Desarrollador
          </p>
          <br />
          <h1>
            Web <code>&</code> Móvil
          </h1>
          <br />
          <p style={{ textAlign: "end", width: "100%", marginRight: "-2em" }}>
            Gioliotta
          </p>
        </div>

        <div className="container-technologies">
          <img src={reactImg} title="React.js" alt="react image" />
          <img src={nextImg} title="Next.js" alt="next image" />
          <img src={nodeImg} title="Node.js" alt="node image" />
          <img src={mongoImg} title="MongoDB" alt="mongodb image" />
          <img src={firebaseImg} title="Firebase" alt="firebase image" />
          <img src={gitImg} title="GIT" alt="git image" />
          <img src={expoImg} title="Expo" alt="expo image" />
          <img src={viteImg} title="Vite" alt="vite image" />
          <img src={styledImg} title="styled-components" alt="styled image" />
          <img src={tailwindImg} title="Tailwind" alt="tailwind image" />
          <img src={jsImg} title="JavaScript" alt="javascript image" />
          <img src={cssImg} title="CSS" alt="css image" />
          <img src={htmlImg} title="HTML" alt="html image" />
        </div>
        <a href="#projects">
          <ArrowDown className="home__arrow" />
        </a>
      </main>

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
