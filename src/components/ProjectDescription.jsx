import circleItem from "../assets/img/circle.svg";

function ProjectDescription({ description, itemOne, itemTwo, itemThree }) {
  return (
    <div className="project__project-description-container">
      <p>{description}</p>

      <br />

      <div className="project__project-description-container-list">
        <ul className="project__project-description-list">
          <li className="project__project-description-list-item">
            <img src={circleItem} alt="circle" />
            <p className="project__project-description-text">{itemOne}</p>
          </li>

          <br />

          <li className="project__project-description-list-item">
            <img src={circleItem} alt="circle" />
            <p className="project__project-description-text">{itemTwo}</p>
          </li>

          <br />

          <li className="project__project-description-list-item">
            <img src={circleItem} alt="circle" />
            <p className="project__project-description-text">{itemThree}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectDescription;
// &nbsp;
