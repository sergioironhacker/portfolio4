import "../../styles/projects.css";
import { PROJECTS_ITEMS } from "../../data";
import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { BsBoxArrowUpRight as VisitIcon } from "react-icons/bs";
import Circle from "../Circle";

function Projects() {
  return (
    <ul className="project" id="projects">
      <h2 className="project__tittle">Proyectos</h2>
      {PROJECTS_ITEMS.map(project => (
        <div key={project.id} className="project__container">
          <article className="project__article">
            <div className="project__container-name-img-icons">
              <p className="project__subtitle">{project.name}</p>
              <img
                className="project__img"
                src={project.image}
                alt={`imágen de ${project.name}`}
              />
              <div className="project__container-icons">
                {project.visitGitHub && (
                  <a
                    href={project.visitGitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon
                      title="Visitar Repositorio"
                      className="project__boxArrowUp-icon pollo"
                      style={{ fontSize: "2.5em" }}
                    />
                  </a>
                )}

                <a
                  href={project.visitPage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <VisitIcon
                    title="Visitar Proyecto"
                    className="project__boxArrowUp-icon"
                    style={{ fontSize: "2.2em" }}
                  />
                </a>
              </div>
            </div>
            <div className="project__container-tech-descrip">
              <div className="project__description-container">
                <p>{project.description.description}</p>
                <br />
                <div className="project__description-container-list">
                  <ul className="project__description-list">
                    <li className="project__description-list-item">
                      <Circle />
                      <p className="project__description-text">
                        {project.description.itemOne}
                      </p>
                    </li>
                    <br />
                    <li className="project__description-list-item">
                      <Circle />
                      <p className="project__description-text">
                        {project.description.itemTwo}
                      </p>
                    </li>
                    <br />
                    <li className="project__description-list-item">
                      <Circle />
                      <p className="project__description-text">
                        {project.description.itemThree}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </ul>
  );
}

export default Projects;
