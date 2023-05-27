import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ItemHeader({ showAnimation, route, text }) {
  const MOTION_STYLES = {
    textBtn: {
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
  const { textBtn } = MOTION_STYLES;

  return (
    <li className="header__list-item">
      <Link to={route} className="header__link">
        <button className="header__button">
          {/* {showAnimation ? (
            <motion.p
              initial={textBtn.initial}
              transition={textBtn.transition}
              animate={textBtn.animate}
            >
              {text}
            </motion.p>
          ) : (
            <p>{text}</p>
          )} */}

          <motion.p
            initial={textBtn.initial}
            transition={textBtn.transition}
            animate={textBtn.animate}
          >
            {text}
          </motion.p>
        </button>
      </Link>
    </li>
  );
}

export default ItemHeader;
