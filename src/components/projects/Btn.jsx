import VisitSite from "./VisitSite";
import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { BsBoxArrowUpRight as BoxArrowUpIcon } from "react-icons/bs";

function Btn({ visitPage, visitGitHub, isGitHub }) {
  if (isGitHub) {
    return (
      <VisitSite to={visitGitHub}>
        <GithubIcon
          title="VISITAR REPOSITORIO"
          className="project__github-icon"
        />
      </VisitSite>
    );
  } else {
    return (
      <VisitSite to={visitPage}>
        <BoxArrowUpIcon
          title="VISITAR PROYECTO"
          className="project__boxArrowUp-icon"
        />
      </VisitSite>
    );
  }
}

export default Btn;
