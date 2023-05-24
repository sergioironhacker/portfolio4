import ItemDescription from "./ItemDescription";

function ProjectDescription({ description, itemOne, itemTwo, itemThree }) {
  return (
    <div className="project__description-container">
      <p>{description}</p>

      <br />

      <div className="project__description-container-list">
        <ul className="project__description-list">
          <ItemDescription item={itemOne} />

          <br />

          <ItemDescription item={itemTwo} />

          <br />

          <ItemDescription item={itemThree} />
        </ul>
      </div>
    </div>
  );
}

export default ProjectDescription;
// &nbsp;
