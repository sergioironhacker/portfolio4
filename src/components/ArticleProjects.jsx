import { useState, useEffect } from "react";
import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { BsBoxArrowUpRight as BoxArrowUpIcon } from "react-icons/bs";
import ContentLoader from "react-content-loader";

function ArticleProjects({
  projectName,
  projectImage,
  projectGithub,
  projectVisit,
  projectDescription,
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = projectImage;
    image.onload = () => setLoading(false);
  }, [projectImage]);

  return (
    <article className="projects__article">
      <div className="projects__container-name-img-icons">
        <h3 className="projects__subtitle">{projectName}</h3>

        {loading ? (
          <ContentLoader
            animationDuration={2000}
            backgroundColor="rgba(23, 195, 178, 0.2)"
            className="projects__contentloader"
          >
            <circle cx="50%" cy="50%" r="20%" />
          </ContentLoader>
        ) : (
          <img className="projects__img" src={projectImage} alt={projectName} />
        )}

        <div className="projects__container-icons">
          <a href={projectVisit} target="_blank" rel="noopener noreferrer">
            <BoxArrowUpIcon
              title="VISITAR PROYECTO"
              className="projects__boxArrowUp-icon"
            />
          </a>

          <a href={projectGithub} target="_blank" rel="noopener noreferrer">
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
