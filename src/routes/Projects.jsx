import "../styles/projects.css";
import Background from "../components/Background";
import BackArrow from "../components/BackArrow";
import ArticleProjects from "../components/ArticleProjects";
import taxiBarber from "../assets/img/taxiBarber.png";
import rickAndMorty from "../assets/img/rick-morty.png";
import passwordGenerator from "../assets/img/password-generator.png";
import portafolio from "../assets/img/portafolio.png";

function Projects() {
  return (
    <>
      <BackArrow />

      <section className="projects">
        <Background />

        <ArticleProjects
          projectName="taxiBarber"
          projectImage={taxiBarber}
          projectVisit="https://taxi-barber.netlify.app/"
          projectGithub="https://github.com/gioliotta/TaxiBarber"
          projectDescription="Web para barbería. Permite gestionar el precio de un corte de pelo. Desde el panel de configuración se puede modificar: precio mínimo, precio máximo, cada cuanto tiempo y cuanto incrementa el precio."
        />

        <ArticleProjects
          projectName="rick y morty"
          projectImage={rickAndMorty}
          projectVisit="https://browser-rick-and-morty.netlify.app/"
          projectGithub="https://github.com/gioliotta/browser-rickAndMorty"
          projectDescription="Explora y busca iformación sobre los personajes de la serie animada"
        />

        <ArticleProjects
          projectName="generador de contraseñas"
          projectImage={passwordGenerator}
          projectVisit="https://passwords-generator-gioliotta.netlify.app/"
          projectGithub="https://github.com/gioliotta/generator-passwords"
          projectDescription="Genera contraseñas aleatorias con una longitud personalizable y la capacidad de agregar caracteres especiales para aumentar la seguridad. El usuario puede copiar la contraseña generada y usarla en cualquier lugar."
        />

        <ArticleProjects
          projectName="portafolio"
          projectImage={portafolio}
          projectVisit="https://portfolio-gioliotta.netlify.app/"
          projectGithub="https://github.com/gioliotta/portfolio-gioliotta"
          projectDescription="Portafolio personal hecho mayormente con CSS"
        />
      </section>
    </>
  );
}

export default Projects;
