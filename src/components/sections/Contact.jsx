import "../../styles/contact.css";
import { CONTACT_ITEMS } from "../../data";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">contacto</h2>
      <nav className="contact__nav">
        <ul className="contact__list">
          {CONTACT_ITEMS.map(item => (
            <li key={item.id} className="contact__list-item">
              <a href={item.href} target="_blank" className="contact__link">
                <p className="contact__text-icon">{item.text}</p>
                <img src={item.icon} className="contact__icon" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Contact;
