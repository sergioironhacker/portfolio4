import "../../styles/contact.css";
import github from "../../assets/img/githubSvg.svg";
import mail from "../../assets/img/emailSvg.svg";
import linkedin from "../../assets/img/linkedinSvg.svg";
import whatsapp from "../../assets/img/whatsapp.svg";

function Contact() {
  const items = [
    {
      id: 0,
      icon: linkedin,
      text: "Giovanni Liotta",
      href: "https://www.linkedin.com/in/giovanniliotta/",
    },
    {
      id: 1,
      icon: github,
      text: "gioliotta",
      href: "https://github.com/gioliotta",
    },
    {
      id: 2,
      icon: mail,
      text: "gioliotta.io@gmail.com",
      href: "#",
    },
    {
      id: 3,
      icon: whatsapp,
      text: "WhatsApp",
      href: "https://wa.me/2615731250?text=Hola Giovanni, te contacto por...",
    },
  ];

  return (
    <section className="contact" id="contact">
      <h2 className="contact__title">Medios de contacto</h2>
      <nav className="contact__nav">
        <ul className="contact__list">
          {items.map(item => (
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
