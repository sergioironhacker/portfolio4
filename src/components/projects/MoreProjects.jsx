import { Link } from "react-router-dom";
import { AiOutlineArrowUp as ArrowUp } from "react-icons/ai";

function MoreProjects() {
  return (
    <div className="project__container-arrowup-btn">
      <a href="#project">
        <ArrowUp className="project__arrowup" />
      </a>

      <button className="btn-more-project">
        <Link
          to="https://github.com/gioliotta?tab=repositories"
          className="btn-more-project__link"
          target="_blank"
        >
          ¡Más proyectos!
        </Link>
      </button>
    </div>
  );
}

export default MoreProjects;
