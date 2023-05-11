import "../styles/projects.css";
import Background from "../components/Background";
import BackArrow from "../components/BackArrow";
import ArticleProjects from "../components/ArticleProjects";
import PR1 from "../assets/img/pr1.jpeg";

function Projects() {
  // const TECHNOLOGIES_PROJECT_1 = ["HTML5", "CSS3", "Tailwind"];
  // const TECHNOLOGIES_PROJECT_2 = ["JavaScript", "React Js"];
  // const TECHNOLOGIES_PROJECT_3 = ["HTML5", "CSS3", "Tailwind"];
  // const TECHNOLOGIES_PROJECT_4 = ["JavaScript", "React Js"];
  // const TECHNOLOGIES_PROJECT_5 = ["HTML5", "CSS3", "Tailwind"];
  // const TECHNOLOGIES_PROJECT_6 = ["JavaScript", "React Js"];

  return (
    <>
      <BackArrow />
      <section className="projects">
        <Background />
        {/* <h2 className="projects__title">Hechale un vistazo a mis proyectos</h2> */}

        <ArticleProjects
          projectName="Proyecto 1"
          // technology={TECHNOLOGIES_PROJECT_1}
          projectImage={PR1}
        />

        <ArticleProjects
          projectName="Proyecto 2"
          // technology={TECHNOLOGIES_PROJECT_2}
          projectImage={PR1}
        />

        <ArticleProjects
          projectName="Proyecto 3"
          // technology={TECHNOLOGIES_PROJECT_3}
          projectImage={PR1}
        />

        <ArticleProjects
          projectName="Proyecto 4"
          // technology={TECHNOLOGIES_PROJECT_4}
          projectImage={PR1}
        />

        <ArticleProjects
          projectName="Proyecto 5"
          // technology={TECHNOLOGIES_PROJECT_5}
          projectImage={PR1}
        />

        <ArticleProjects
          projectName="Proyecto 6"
          // technology={TECHNOLOGIES_PROJECT_6}
          projectImage={PR1}
        />
      </section>
    </>
  );
}

export default Projects;
