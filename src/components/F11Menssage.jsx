import "../styles/f11message.css";
import { useState } from "react";
import { CSSTransition as F11Animation } from "react-transition-group";
import f11 from "../assets/img/f11.png";

function F11Menssage() {
  const [showMessageF11, setShowMessageF11] = useState(false);

  addEventListener("load", function () {
    if (!window.fullScreen) {
      setShowMessageF11(true);
      setTimeout(() => {
        setShowMessageF11(false);
      }, 5000);
    }
  });

  function handleFullscreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  }

  return (
    <F11Animation
      in={showMessageF11}
      timeout={{ enter: 5000, exit: 3000 }}
      classNames="f11__message"
    >
      <div className="f11__message">
        para mayor inmersión presione aquí
        <img
          src={f11}
          onClick={handleFullscreen}
          className="f11__img"
          alt="F11"
        />
      </div>
    </F11Animation>
  );
}

export default F11Menssage;
