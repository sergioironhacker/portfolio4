import "../styles/projects.css";
import { motion } from "framer-motion";
import BackArrow from "../components/backArrow/BackArrow";
import Background from "../components/background/Background";
import ArticleProject from "../components/projects/ArticleProject";
import ProjectDescription from "../components/projects/ProjectDescription";
import taxiBarber from "../assets/img/taxiBarber.png";
import rickAndMorty from "../assets/img/rick-morty.png";
import passwordGenerator from "../assets/img/password-generator.png";
import smartArtGenerator from "../assets/img/smartArtGenerator.png";
import portafolio from "../assets/img/portafolio.png";
import cardsGenerator from "../assets/img/gioliotta.png";
import MoreProjects from "../components/projects/MoreProjects";
import clipboard from "../assets/img/clipboardImg.png";

function Projects() {
  const DATA_PROJECTS = {
    projectOne: {
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
    projectTwo: {
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

    projectThree: {
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

    projectFour: {
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
        itemThree: "Información sobre episodios, ubicaciones y otros detalles.",
      },
    },

    projectFive: {
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
        itemThree: "Copiar la contraseña generada y usarla en cualquier lugar.",
      },
    },

    projectSix: {
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

    projectSeven: {
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
  };

  const {
    projectOne,
    projectTwo,
    projectThree,
    projectFour,
    projectFive,
    projectSix,
    projectSeven,
  } = DATA_PROJECTS;

  const MOTION_STYLES = {
    divStyles: {
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "center",
      aligItems: "center",
    },

    divOne: {
      initial: {
        x: "-600px",
        opacity: 0,
      },
      transition: {
        delay: 0,
        duration: 2,
      },
      animate: {
        opacity: 1,
        x: "0px",
      },
    },

    divTwo: {
      initial: {
        x: "600px",
        opacity: 0,
      },
      transition: {
        delay: 0.5,
        duration: 2,
      },
      animate: {
        opacity: 1,
        x: "0px",
      },
    },

    divThree: {
      initial: {
        x: "-600px",
        opacity: 0,
      },
      transition: {
        delay: 1,
        duration: 2,
      },
      animate: {
        opacity: 1,
        x: "0px",
      },
    },

    divFour: {
      initial: {
        x: "600px",
        opacity: 0,
      },
      transition: {
        delay: 1.5,
        duration: 2,
      },
      animate: {
        opacity: 1,
        x: "0px",
      },
    },

    divFive: {
      initial: {
        x: "-600px",
        opacity: 0,
      },
      transition: {
        delay: 2,
        duration: 2,
      },
      animate: {
        opacity: 1,
        x: "0px",
      },
    },

    divSix: {
      initial: {
        x: "600px",
        opacity: 0,
      },
      transition: {
        delay: 2.5,
        duration: 2,
      },
      animate: {
        opacity: 1,
        x: "0px",
      },
    },

    divSeven: {
      initial: {
        x: "-600px",
        opacity: 0,
      },
      transition: {
        delay: 3,
        duration: 2,
      },
      animate: {
        opacity: 1,
        x: "0px",
      },
    },
  };

  const {
    divStyles,
    divOne,
    divTwo,
    divThree,
    divFour,
    divFive,
    divSix,
    divSeven,
  } = MOTION_STYLES;

  const PROJECTS = [
    <motion.div
      key={projectOne.id}
      initial={divOne.initial}
      transition={divOne.transition}
      animate={divOne.animate}
      style={divStyles}
    >
      <ArticleProject
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
      />
    </motion.div>,

    <motion.div
      key={projectTwo.id}
      initial={divTwo.initial}
      transition={divTwo.transition}
      animate={divTwo.animate}
      style={divStyles}
    >
      <ArticleProject
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
      />
    </motion.div>,

    <motion.div
      key={projectThree.id}
      initial={divThree.initial}
      transition={divThree.transition}
      animate={divThree.animate}
      style={divStyles}
    >
      <ArticleProject
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
      />
    </motion.div>,

    <motion.div
      key={projectFour.id}
      initial={divFour.initial}
      transition={divFour.transition}
      animate={divFour.animate}
      style={divStyles}
    >
      <ArticleProject
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
      />
    </motion.div>,

    <motion.div
      key={projectFive.id}
      initial={divFive.initial}
      transition={divFive.transition}
      animate={divFive.animate}
      style={divStyles}
    >
      <ArticleProject
        name={projectFive.name}
        image={projectFive.image}
        visitPage={projectFive.visitPage}
        visitGitHub={projectFive.visitGitHub}
        description={
          <ProjectDescription
            description={projectFive.description.description}
            itemOne={projectFive.description.itemOne}
            itemTwo={projectFive.description.itemTwo}
            itemThree={projectFive.description.itemThree}
          />
        }
      />
    </motion.div>,

    <motion.div
      key={projectSix.id}
      initial={divSix.initial}
      transition={divSix.transition}
      animate={divSix.animate}
      style={divStyles}
    >
      <ArticleProject
        name={projectSix.name}
        image={projectSix.image}
        visitPage={projectSix.visitPage}
        visitGitHub={projectSix.visitGitHub}
        description={
          <ProjectDescription
            description={projectSix.description.description}
            itemOne={projectSix.description.itemOne}
            itemTwo={projectSix.description.itemTwo}
            itemThree={projectSix.description.itemThree}
          />
        }
      />
    </motion.div>,
    <motion.div
      key={projectSeven.id}
      initial={divSeven.initial}
      transition={divSeven.transition}
      animate={divSeven.animate}
      style={divStyles}
    >
      <ArticleProject
        name={projectSeven.name}
        image={projectSeven.image}
        visitPage={projectSeven.visitPage}
        visitGitHub={projectSeven.visitGitHub}
        description={
          <ProjectDescription
            description={projectSeven.description.description}
            itemOne={projectSeven.description.itemOne}
            itemTwo={projectSeven.description.itemTwo}
            itemThree={projectSeven.description.itemThree}
          />
        }
      />
    </motion.div>,
  ];

  return (
    <>
      <BackArrow />

      <section className="project">
        <Background />

        {PROJECTS}

        <MoreProjects />
      </section>
    </>
  );
}

export default Projects;
