import { Link } from "react-router-dom";

const CVButton = () => (
  <div className="aboutme__container-cvbutton">
    <Link
      className="aboutme__a-cvbutton"
      to="/cv-giovanni-liotta.pdf"
      target="_blank"
    >
      <p className="aboutme__text-cvbutton">Ver CV</p>
    </Link>
  </div>
);

export default CVButton;
