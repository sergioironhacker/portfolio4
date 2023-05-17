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
          projectDescription="Explorador de la API de Rick and Morty, permite a los usuarios buscar y explorar información sobre los personajes, episodios y ubicaciones. En este proyecto trabajé con una API externa y mejoré mi comprensión de la estructura y el flujo de datos."
        />

        <ArticleProjects
          projectName="generador de contraseñas"
          projectImage={passwordGenerator}
          projectVisit="https://passwords-generator-gioliotta.netlify.app/"
          projectGithub="https://github.com/gioliotta/generator-passwords"
          projectDescription="Genera contraseñas aleatorias con una longitud personalizable y la capacidad de agregar caracteres especiales para aumentar la seguridad. El usuario puede copiar la contraseña generada y usarla en cualquier lugar. Aprendí a manipular y generar cadenas de caracteres de manera aleatoria para aplicar una solución efectiva."
        />

        <ArticleProjects
          projectName="portafolio"
          projectImage={portafolio}
          projectVisit="https://portfolio-gioliotta.netlify.app/"
          projectGithub="https://github.com/gioliotta/portfolio-gioliotta"
          projectDescription="Portafolio personal hecho mayormente con CSS."
        />
      </section>
    </>
  );
}

export default Projects;
