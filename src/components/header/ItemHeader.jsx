import { Link } from "react-router-dom";

function ItemHeader({ route, text }) {
  return (
    <li className="header__list-item">
      <Link to={route} className="header__link">
        <button className="header__button">{text}</button>
      </Link>
    </li>
  );
}

export default ItemHeader;
