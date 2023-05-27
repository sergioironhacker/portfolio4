import "../f11Message/f11Message.css";
import { useState } from "react";
import { CSSTransition as F11Animation } from "react-transition-group";
import f11Img from "../../assets/img/f11Img.png";

function F11Message() {
  const [showMessageF11, setShowMessageF11] = useState(false);

  addEventListener("load", function () {
    if (!window.fullScreen) {
      setTimeout(() => {
        setShowMessageF11(true);
      }, 2000);

      setTimeout(() => {
        setShowMessageF11(false);
      }, 9000);
    }
  });

  function handleFullscreen() {
    const element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

  return (
    <F11Animation
      in={showMessageF11}
      timeout={{ enter: 5000, exit: 3000 }}
      classNames="f11__message"
    >
      <div className="f11__message">
        para mayor inmersión presione
        <img
          src={f11Img}
          onClick={handleFullscreen}
          className="f11__img"
          alt="F11"
        />
      </div>
    </F11Animation>
  );
}

export default F11Message;
