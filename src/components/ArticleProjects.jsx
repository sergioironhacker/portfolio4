import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { BsBoxArrowUpRight as BoxArrowUpIcon } from "react-icons/bs";

function ArticleProjects({ projectName, projectImage }) {
  return (
    <article className="projects__article">
      <h3 className="projects__subtitle">{projectName}</h3>

      <img className="projects__img" src={projectImage} />
      <div className="projects__container-icons">
        <BoxArrowUpIcon
          title="VISITAR PROYECTO"
          className="projects__boxArrowUp-icon"
        />
        <GithubIcon
          title="VISITAR REPOSITORIO"
          className="projects__github-icon"
        />
      </div>

      <p className="projects__description">
        Juego de buscaminas para busacr minas re piolas en cualquier parte del
        mundo lolear y sexo lol safiros
      </p>
    </article>
  );
}

export default ArticleProjects;

{
  /* <ol className="projects__list">
  {technology.map((item, index) => (
    <li key={index} className="projects__list-item">
      {item}
    </li>
  ))}
</ol>; */
}
