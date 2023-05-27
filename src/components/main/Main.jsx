import "../main/main.css";
import { motion } from "framer-motion";
import { useState } from "react";

function Main() {
  const [showAnimation, setShowAnimation] = useState(false);

  addEventListener("load", () => {
    setShowAnimation(true);
    return setTimeout(() => setShowAnimation(false), 1000);
  });

  const MOTION_STYLES = {
    tittle: {
      initial: {
        scale: 0,
        opacity: 0,
      },
      transition: {
        duration: 1,
      },
      animate: {
        scale: 1,
        opacity: 1,
      },
    },
  };

  const { tittle } = MOTION_STYLES;

  return (
    <main className="main">
      <div id="main__container">
        {showAnimation ? (
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
        ) : (
          <h1 className="main__title">
            Giovanni Liotta
            <br />
            <br />
            Frontend Developer
          </h1>
        )}
      </div>
    </main>
  );
}

export default Main;
