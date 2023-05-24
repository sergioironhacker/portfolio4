import "../contactItems/itemContact.css";
import { Link } from "react-router-dom";

function ItemContact({ textIcon, iconClass, href, iconItem }) {
  function openMail() {
    if (textIcon === "gioliotta.io@gmail.com") {
      window.open("mailto:gioliotta.io@gmail.com");
    }
  }

  const handleIconClass = () => {
    const classMap = {
      linkedin: "contact__icon linkedin",
      github: "contact__icon github",
      email: "contact__icon email",
      cv: "contact__icon cv",
      default: "contact__icon",
    };

    return classMap[iconClass] || classMap.default;
  };

  return (
    <li onClick={openMail} className="contact__list-item">
      <Link to={href} className="contact__link" target={href ? "_blank" : null}>
        <p className="contact__text-icon">{textIcon}</p>
        <img src={iconItem} className={handleIconClass()} />
      </Link>
    </li>
  );
}

export default ItemContact;

// {iconClass === "cv" ? (
//   <Link className="contact__link" target="_blank" to={href}>
//     <p className="contact__text-icon">{textIcon}</p>

//     <img src={iconItem} className={handleIconClass()} />
//   </Link>
// ) : (
//   <a className="contact__link" target="_blank" href={href}>
//     <p className="contact__text-icon">{textIcon}</p>

//     <img src={iconItem} className={handleIconClass()} />
//   </a>
// )}
