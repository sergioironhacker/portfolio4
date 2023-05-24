import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { BsBoxArrowUpRight as BoxArrowUpIcon } from "react-icons/bs";

function BtnProject({ visitPage, isGitHub }) {
  return (
    <a href={visitPage} target="_blank" rel="noopener noreferrer">
      {isGitHub ? (
        <GithubIcon
          title="VISITAR REPOSITORIO"
          className="project__github-icon"
        />
      ) : (
        <BoxArrowUpIcon
          title="VISITAR PROYECTO"
          className="project__boxArrowUp-icon"
        />
      )}
    </a>
  );
}

export default BtnProject;
