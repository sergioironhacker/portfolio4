import "../../styles/projects.css";
import taxiBarber from "../../assets/img/taxiBarber.png";
import rickAndMorty from "../../assets/img/rick-morty.png";
import passwordGenerator from "../../assets/img/password-generator.png";
import smartArtGenerator from "../../assets/img/smartArtGenerator.png";
import portafolio from "../../assets/img/portafolio.png";
import cardsGenerator from "../../assets/img/gioliotta.png";
import clipboard from "../../assets/img/clipboardImg.png";
import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { BsBoxArrowUpRight as VisitIcon } from "react-icons/bs";
import circle from "../../assets/img/circle.svg";

function Projects() {
  const items = [
      {
        id: 1,
        name: "clipboard notes",
        image: clipboard,
        visitPage: "https://clipboard-notes.netlify.app/",
        visitGitHub: "https://github.com/gioliotta/clipboard-extension",
        description: {
          description:
            "Convertí una app de notas en extensión configurando el manifest.json, disponible para navegadores como Chrome y Edge.",
          itemOne: "Papelera de reciclaje para recuperar notas eliminadas.",
          itemTwo: "Opciones para editar, borrar y copiar.",
          itemThree: "Versión disponible en inglés y español.",
        },
      },
      {
        id: 2,
        name: "taxiBarber",
        image: taxiBarber,
        visitPage: "https://taxi-barber.netlify.app/",
        visitGitHub: "https://github.com/gioliotta/TaxiBarber",
        description: {
          description:
            "Implementé la actualización de inputs utilizando estados y guardé la información en  el localStorage.",
          itemOne: "Gestión el precio de un corte de pelo.",
          itemTwo: "Panel de configuración para modificar los parámetros.",
          itemThree: "Opción para cambiar contraseña.",
        },
      },

      {
        id: 3,
        name: "smartArt generator",
        image: smartArtGenerator,
        visitPage: "https://smartart-generator.netlify.app/",
        visitGitHub:
          "https://github.com/gioliotta/SmartArt-Readme/blob/main/README.md",
        description: {
          description:
            "Integré la API de OpenAI, y la utilicé para generar imágenes por medio de un prompt del usuario.",
          itemOne: "Generar imágenes personalizadas.",
          itemTwo: "Seleccionar el tamaño de la imagen.",
          itemThree: "Botón para visitar la imagen generada.",
        },
      },

      {
        id: 4,
        name: "rick & morty",
        image: rickAndMorty,
        visitPage: "https://browser-rick-and-morty.netlify.app/",
        visitGitHub: "https://github.com/gioliotta/browser-rickAndMorty",
        description: {
          description:
            "Trabajé con una API externa y mejoré mi comprensión de la estructura y el flujo de datos.",
          itemOne: "Input para filtrar personajes.",
          itemTwo: "Carta dinámica para cada personaje.",
          itemThree:
            "Información sobre episodios, ubicaciones y otros detalles.",
        },
      },

      {
        id: 5,
        name: "generador de contraseñas",
        image: passwordGenerator,
        visitPage: "https://passwords-generator-gioliotta.netlify.app/",
        visitGitHub: "https://github.com/gioliotta/generator-passwords",
        description: {
          description:
            "Aprendí a manipular y generar cadenas de caracteres de forma aleatoria.",
          itemOne: "Longitud personalizable.",
          itemTwo: "Capacidad de agregar caracteres especiales.",
          itemThree:
            "Copiar la contraseña generada y usarla en cualquier lugar.",
        },
      },

      {
        id: 6,
        name: "Generador de cards",
        image: cardsGenerator,
        visitPage: "https://card-generator-ts.netlify.app/",
        visitGitHub: "https://github.com/gioliotta/card-generator",
        description: {
          description:
            "Integré React y TypeScript, trabajé con tipado estático, lo que brindó beneficios en términos de detección de errores.",
          itemOne: "Los datos ingresados se modifican en tiempo real.",
          itemTwo: "Botón para descargar la card generada.",
          itemThree: "Uso de styled-components para los estilos.",
        },
      },

      {
        id: 7,
        name: "portafolio",
        image: portafolio,
        visitPage: "https://portfolio-gioliotta.netlify.app/",
        visitGitHub: "https://github.com/gioliotta/portfolio-gioliotta",
        description: {
          description:
            "Incluye información relevante sobre mí, selección de proyectos destacados y datos de contacto.",
          itemOne: "Realizado en un 80% con CSS.",
          itemTwo: "Uso de Framer Motion para animaciones atractivas.",
          itemThree:
            "Uso de librerías como router-dom, device-detect, react-icons.",
        },
      },
    ],
    divStyles = {
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      aligItems: "center",
    };

  return (
    <section className="project" id="projects">
      <h2 className="project__tittle">Proyectos</h2>
      {items.map(project => (
        <div key={project.id} style={divStyles}>
          <article className="project__article">
            <div className="project__container-name-img-icons">
              <p className="project__subtitle">{project.name}</p>
              <img
                className="project__img"
                src={project.image}
                alt={`imágen de ${project.name}`}
              />
              <div className="project__container-icons">
                <a
                  href={project.visitGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon
                    title="Visitar Repositorio"
                    className="project__boxArrowUp-icon"
                  />
                </a>

                <a
                  href={project.visitPage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <VisitIcon
                    title="Visitar Proyecto"
                    className="project__boxArrowUp-icon"
                  />
                </a>
              </div>
            </div>
            <div className="project__container-tech-descrip">
              <div className="project__description-container">
                <p>{project.description.description}</p>
                <br />
                <div className="project__description-container-list">
                  <ul className="project__description-list">
                    <li className="project__description-list-item">
                      <img src={circle} alt="circle" />
                      <p className="project__description-text">
                        {project.description.itemOne}
                      </p>
                    </li>
                    <br />
                    <li className="project__description-list-item">
                      <img src={circle} alt="circle" />
                      <p className="project__description-text">
                        {project.description.itemTwo}
                      </p>
                    </li>
                    <br />
                    <li className="project__description-list-item">
                      <img src={circle} alt="circle" />
                      <p className="project__description-text">
                        {project.description.itemThree}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </section>
  );
}

export default Projects;
