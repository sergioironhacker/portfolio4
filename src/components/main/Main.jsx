import "../main/main.css";
import { motion } from "framer-motion";

function Main() {
  const MOTION_STYLES = {
    tittle: {
      initial: {
        opacity: 0,
      },
      transition: {
        duration: 1,
      },
      animate: {
        opacity: 1,
      },
    },
  };

  const { tittle } = MOTION_STYLES;

  return (
    <main className="main">
      <div id="main__container">
        <motion.h1
          initial={tittle.initial}
          transition={tittle.transition}
          animate={tittle.animate}
          className="main__title"
        >
          Giovanni Liotta
          <br />
          <br />
          Frontend Developer
        </motion.h1>
      </div>
    </main>
  );
}

export default Main;
