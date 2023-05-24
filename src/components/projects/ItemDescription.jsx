import circleItem from "../../assets/img/circle.svg";

function ItemDescription({ item }) {
  return (
    <li className="project__description-list-item">
      <img src={circleItem} alt="circle" />
      <p className="project__description-text">{item}</p>
    </li>
  );
}

export default ItemDescription;
