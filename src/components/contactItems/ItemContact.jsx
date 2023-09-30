import "../contactItems/itemContact.css";

function ItemContact({ id, href, text, icon }) {
  return (
    <li key={id} className="contact__list-item">
      <a to={href} className="contact__link">
        <p className="contact__text-icon"> {text}</p>
        <img src={icon} className="contact__icon" />
      </a>
    </li>
  );
}

export default ItemContact;
