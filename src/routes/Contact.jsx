import "../styles/contact.css";
import { motion } from "framer-motion";
import Background from "../components/background/Background";
import BackArrow from "../components/backArrow/BackArrow";
import ContactItems from "../components/contactItems/ContactItems";
import linkedin from "../assets/img/linkedinSvg.svg";
import github from "../assets/img/githubSvg.svg";
import email from "../assets/img/emailSvg.svg";
import cv from "../assets/img/cvSvg.svg";

function Contact() {
  const MOTION_STYLES = {
    stylesContainer: {
      width: "120%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    itemTittle: {
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

    itemContactOne: {
      initial: {
        scale: 0,
      },
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
      animate: {
        scale: 1,
      },
    },

    itemContactTwo: {
      initial: {
        scale: 0,
      },
      transition: {
        duration: 0.6,
        delay: 0.8,
      },
      animate: {
        scale: 1,
      },
    },

    itemContactThree: {
      initial: {
        scale: 0,
      },
      transition: {
        duration: 0.6,
        delay: 1.1,
      },
      animate: {
        scale: 1,
      },
    },

    itemContactFour: {
      initial: {
        scale: 0,
      },
      transition: {
        duration: 0.6,
        delay: 1.4,
      },
      animate: {
        scale: 1,
      },
    },
  };

  const {
    stylesContainer,
    itemTittle,
    itemContactOne,
    itemContactTwo,
    itemContactThree,
    itemContactFour,
  } = MOTION_STYLES;

  const CONTACT_ITEMS = [
    <motion.div
      key="contact1"
      initial={itemContactOne.initial}
      transition={itemContactOne.transition}
      animate={itemContactOne.animate}
      style={stylesContainer}
    >
      <ContactItems
        iconItem={linkedin}
        textIcon="Giovanni Liotta"
        href="https://www.linkedin.com/in/giovanniliotta/"
        iconClass="linkedin"
      />
    </motion.div>,

    <motion.div
      key="contact2"
      initial={itemContactTwo.initial}
      transition={itemContactTwo.transition}
      animate={itemContactTwo.animate}
      style={stylesContainer}
    >
      <ContactItems
        iconItem={github}
        textIcon="gioliotta"
        href="https://github.com/gioliotta"
        iconClass="github"
      />
    </motion.div>,

    <motion.div
      key="contact3"
      initial={itemContactThree.initial}
      transition={itemContactThree.transition}
      animate={itemContactThree.animate}
      style={stylesContainer}
    >
      <ContactItems
        iconItem={email}
        textIcon="gioliotta.io@gmail.com"
        iconClass="email"
      />
    </motion.div>,

    <motion.div
      key="contact4"
      initial={itemContactFour.initial}
      transition={itemContactFour.transition}
      animate={itemContactFour.animate}
      style={stylesContainer}
    >
      <ContactItems
        iconItem={cv}
        textIcon="Ver CV"
        href="/cv-giovanni-liotta.pdf"
        iconClass="cv"
      />
    </motion.div>,
  ];

  return (
    <section className="contact">
      <Background />

      <BackArrow />

      <motion.h2
        initial={itemTittle.initial}
        transition={itemTittle.transition}
        animate={itemTittle.animate}
        className="contact__title"
      >
        Medios de contacto
      </motion.h2>
      <nav className="contact__nav">
        <ul className="contact__list">{CONTACT_ITEMS}</ul>
      </nav>
    </section>
  );
}

export default Contact;
