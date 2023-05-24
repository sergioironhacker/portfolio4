import "../aboutMe/cvButton.css";
import { Link } from "react-router-dom";

function CVButton() {
  return (
    <div className="cvbutton__container">
      <Link
        to="/cv-giovanni-liotta.pdf"
        className="cvbutton__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="cvbutton__text">Ver CV</p>
      </Link>
    </div>
  );
}

export default CVButton;
