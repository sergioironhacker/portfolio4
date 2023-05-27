import "../footer/footer.css";
import { motion } from "framer-motion";

function Footer() {
  const MOTION_STYLES = {
    textFt: {
      initial: {
        opacity: 0,
      },
      transition: {
        duration: 2,
      },
      animate: {
        opacity: 1,
      },
    },
  };
  const { textFt } = MOTION_STYLES;

  return (
    <footer className="footer">
      <motion.p
        initial={textFt.initial}
        transition={textFt.transition}
        animate={textFt.animate}
        className="footer__status"
      >
        Estado&nbsp;
      </motion.p>
      <motion.svg
        initial={textFt.initial}
        transition={textFt.transition}
        animate={textFt.animate}
        width="16px"
        height="16px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        alt="circulo"
      >
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          fill="#4acb4a"
        />
      </motion.svg>
      <motion.p
        initial={textFt.initial}
        transition={textFt.transition}
        animate={textFt.animate}
        className="footer__active"
      >
        &nbsp;Activo
      </motion.p>
    </footer>
  );
}

export default Footer;
