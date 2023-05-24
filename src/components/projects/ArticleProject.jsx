import { useImageLoader } from "../loading/LoadingComponent";
import LoadingAnimation from "../loading/LoadingAnimation";
import BtnProject from "./BtnProject";

function ArticleProject({
  projectName,
  projectImage,
  projectGithub,
  projectVisit,
  projectDescription,
}) {
  const LOADING = useImageLoader(projectImage);

  return (
    <article className="project__article">
      <div className="project__container-name-img-icons">
        <h3 className="project__subtitle">{projectName}</h3>

        {LOADING ? (
          <LoadingAnimation isCircle />
        ) : (
          <img className="project__img" src={projectImage} alt={projectName} />
        )}

        <div className="project__container-icons">
          <BtnProject isGitHub={false} visitPage={projectVisit} />

          <BtnProject isGitHub visitPage={projectGithub} />
        </div>
      </div>

      <div className="project__container-tech-descrip">
        <p>{projectDescription}</p>
      </div>
    </article>
  );
}

export default ArticleProject;
