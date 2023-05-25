import "../styles/projects.css";
import BackArrow from "../components/backArrow/BackArrow";
import Background from "../components/background/Background";
import ArticleProject from "../components/projects/ArticleProject";
import ProjectDescription from "../components/projects/ProjectDescription";
// import smartArtGenerator from "../assets/img/smartArtGenerator.png";
import taxiBarber from "../assets/img/taxiBarber.png";
import rickAndMorty from "../assets/img/rick-morty.png";
import passwordGenerator from "../assets/img/password-generator.png";
import portafolio from "../assets/img/portafolio.png";
import MoreProjects from "../components/projects/MoreProjects";

function Projects() {
  const DATA_PROJECTS = {
    projectOne: {
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

    projectTwo: {
      name: "rick & morty",
      image: rickAndMorty,
      visitPage: "https://browser-rick-and-morty.netlify.app/",
      visitGitHub: "https://github.com/gioliotta/browser-rickAndMorty",
      description: {
        description:
          "Trabajé con una API externa y mejoré mi comprensión de la estructura y el flujo de datos.",
        itemOne: "Input para filtrar personajes.",
        itemTwo: "Carta dinámica para cada personaje.",
        itemThree: "Información sobre episodios, ubicaciones y otros detalles.",
      },
    },

    projectThree: {
      name: "generador de contraseñas",
      image: passwordGenerator,
      visitPage: "https://passwords-generator-gioliotta.netlify.app/",
      visitGitHub: "https://github.com/gioliotta/generator-passwords",
      description: {
        description:
          "Aprendí a manipular y generar cadenas de caracteres de forma aleatoria.",
        itemOne: "Longitud personalizable.",
        itemTwo: "Capacidad de agregar caracteres especiales.",
        itemThree: "Copiar la contraseña generada y usarla en cualquier lugar.",
      },
    },

    projectFour: {
      name: "portafolio",
      image: portafolio,
      visitPage: "https://portfolio-gioliotta.netlify.app/",
      visitGitHub: "https://github.com/gioliotta/portfolio-gioliotta",
      description: {
        description:
          "Incluye información relevante sobre mí, selección de proyectos destacados y datos de contacto.",
        itemOne: "Realizado en un 80% con CSS.",
        itemTwo: "Animaciones y efectos atractivos.",
        itemThree:
          "Uso de librerías como router-dom, device-detect, react-icons.",
      },
    },
  };

  const { projectOne, projectTwo, projectThree, projectFour } = DATA_PROJECTS;

  const PROJECTS = [
    <ArticleProject
      key="project1"
      name={projectOne.name}
      image={projectOne.image}
      visitPage={projectOne.visitPage}
      visitGitHub={projectOne.visitGitHub}
      description={
        <ProjectDescription
          description={projectOne.description.description}
          itemOne={projectOne.description.itemOne}
          itemTwo={projectOne.description.itemTwo}
          itemThree={projectOne.description.itemThree}
        />
      }
    />,
    <ArticleProject
      key="project2"
      name={projectTwo.name}
      image={projectTwo.image}
      visitPage={projectTwo.visitPage}
      visitGitHub={projectTwo.visitGitHub}
      description={
        <ProjectDescription
          description={projectTwo.description.description}
          itemOne={projectTwo.description.itemOne}
          itemTwo={projectTwo.description.itemTwo}
          itemThree={projectTwo.description.itemThree}
        />
      }
    />,
    <ArticleProject
      key="project3"
      name={projectThree.name}
      image={projectThree.image}
      visitPage={projectThree.visitPage}
      visitGitHub={projectThree.visitGitHub}
      description={
        <ProjectDescription
          description={projectThree.description.description}
          itemOne={projectThree.description.itemOne}
          itemTwo={projectThree.description.itemTwo}
          itemThree={projectThree.description.itemThree}
        />
      }
    />,
    <ArticleProject
      key="project4"
      name={projectFour.name}
      image={projectFour.image}
      visitPage={projectFour.visitPage}
      visitGitHub={projectFour.visitGitHub}
      description={
        <ProjectDescription
          description={projectFour.description.description}
          itemOne={projectFour.description.itemOne}
          itemTwo={projectFour.description.itemTwo}
          itemThree={projectFour.description.itemThree}
        />
      }
    />,
  ];

  return (
    <>
      <BackArrow />

      <section className="project" id="project">
        <Background />

        {PROJECTS}

        <MoreProjects />
      </section>
    </>
  );
}

export default Projects;

/*<ArticleProject
          name="smartArt generator"
          image={smartArtGenerator}
          visitPage="https://smartart-generator.netlify.app/"
          visitGitHub="https://github.com/gioliotta/smartart-generator"
          description={
            <ProjectDescription
              description="Integré la API de OpenAI, y la utilicé para generar imágenes por medio de un prompt del usuario."
              itemOne="Generar imágenes personalizadas."
              itemTwo="Seleccionar el tamaño de la imagen."
              itemThree="Botón para descargar la imagen generada."
            />
          }
        />*/
