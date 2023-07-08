import "../styles/aboutme.css";
import { motion } from "framer-motion";
import Background from "../components/background/Background";
import BackArrow from "../components/backArrow/BackArrow";
import Technologies from "../components/aboutMe/Technologies";
import CVButton from "../components/aboutMe/CVButton";

function AboutMe() {
  const MOTION_STYLES = {
    tittle: {
      initial: {
        x: "-200px",
      },
      transition: {
        duration: 0.6,
      },
      animate: {
        x: "0px",
      },
    },

    text: {
      initial: {
        x: "200px",
      },
      transition: {
        duration: 0.6,
      },
      animate: {
        x: "0px",
      },
    },

    button: {
      initial: {
        x: "200px",
        opacity: 0,
      },
      transition: {
        duration: 0.4,
        delay: 0.6,
      },
      animate: {
        x: "0px",
        opacity: 1,
      },
    },
  };

  const { tittle, text, button } = MOTION_STYLES;

  const TITTLE = [
    <motion.h2
      key="tittle"
      initial={tittle.initial}
      transition={tittle.transition}
      animate={tittle.animate}
      className="aboutme__tittle"
    >
      Sobre Mí
    </motion.h2>,
  ];

  const TEXT = [
    <motion.div
      key="text"
      initial={text.initial}
      transition={text.transition}
      animate={text.animate}
    >
      <p className="aboutme__text">
        Inicié mi aprendizaje de forma autodidacta utilizando plataformas como
        Udemy, CoderHouse, entre otras.
        <br />
        <br />
        He estado mejorando mis habilidades durante más de un año, centrándome
        en el desarrollo front-end. Trabajo con tecnologías como{" "}
        <Technologies />
        <br />
        <br />
        Mi enfoque es crear sitios web responsive con experiencias de usuario
        atractivas y funcionales. Utilizo programas de diseño como Figma para
        asegurarme de que los sitios sean intuitivos para los usuarios.
        <br />
        <br />
        Estoy interesado en aportar valor a la empresa y contribuir al
        crecimiento del equipo. Tengo 20 años de edad y vivo en Mendoza,
        Argentina.
      </p>
    </motion.div>,
  ];

  return (
    <section className="aboutme">
      <Background />
      <BackArrow />

      {TITTLE}

      {TEXT}
    </section>
  );
}

export default AboutMe;

/* <motion.div
        initial={button.initial}
        transition={button.transition}
        animate={button.animate}
      >
        <CVButton />
      </motion.div> */
