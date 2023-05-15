import "../styles/f11message.css";
import { useEffect, useState } from "react";
import f11 from "../assets/img/f11.png";
import { CSSTransition as F11Animation } from "react-transition-group";

function F11Menssage() {
  const [showMessageF11, setShowMessageF11] = useState(false);

  useEffect(() => {
    setShowMessageF11(true);
    setTimeout(() => setShowMessageF11(false), 5000);
  }, []);

  return (
    <F11Animation
      in={showMessageF11}
      timeout={{ enter: 5000, exit: 3000 }}
      classNames="f11__message"
    >
      <div className="f11__message">
        para mayor inmersión <img src={f11} className="f11__img" />
      </div>
    </F11Animation>
  );
}

export default F11Menssage;
