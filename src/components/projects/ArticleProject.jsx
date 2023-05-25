import { useImageLoader } from "../loading/LoadingComponent";
import LoadingAnimation from "../loading/LoadingAnimation";
import ButtonsProject from "./ButtonsProject";
import Btn from "./Btn";
import Description from "./Description";

function ArticleProject({ name, image, visitGitHub, visitPage, description }) {
  const LOADING = useImageLoader(image);

  return (
    <article className="project__article">
      <div className="project__container-name-img-icons">
        <h3 className="project__subtitle">{name}</h3>

        {LOADING ? (
          <LoadingAnimation isCircle />
        ) : (
          <img className="project__img" src={image} alt={name} />
        )}

        <ButtonsProject>
          <Btn isGitHub={false} visitPage={visitPage} />

          <Btn isGitHub visitGitHub={visitGitHub} />
        </ButtonsProject>
      </div>

      <Description>{description}</Description>
    </article>
  );
}

export default ArticleProject;
