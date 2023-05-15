import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { BsBoxArrowUpRight as BoxArrowUpIcon } from "react-icons/bs";

function ArticleProjects({
  projectName,
  projectImage,
  projectGithub,
  projectVisit,
  projectDescription,
}) {
  return (
    <article className="projects__article">
      <div className="projects__container-name-img-icons">
        <h3 className="projects__subtitle">{projectName}</h3>
        <img className="projects__img" src={projectImage} />
        <div className="projects__container-icons">
          <a href={projectVisit} target="_blank">
            <BoxArrowUpIcon
              title="VISITAR PROYECTO"
              className="projects__boxArrowUp-icon"
            />
          </a>

          <a href={projectGithub} target="_blank">
            <GithubIcon
              title="VISITAR REPOSITORIO"
              className="projects__github-icon"
            />
          </a>
        </div>
      </div>

      <div className="projects__container-tech-descrip">
        <p className="projects__description">{projectDescription}</p>
      </div>
    </article>
  );
}

export default ArticleProjects;
