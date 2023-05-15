import "../styles/contact.css";
import BackArrow from "../components/BackArrow";
import Background from "../components/Background";
import ContactItems from "../components/ContactItems";
import linkedin from "../assets/img/linkedinSvg.svg";
import github from "../assets/img/githubSvg.svg";
import email from "../assets/img/emailSvg.svg";

function Contact() {
  return (
    <section className="contact">
      <Background />
      <BackArrow />

      <h2 className="contact__title">Medios de contacto</h2>
      <nav className="contact__nav">
        <ul className="contact__list">
          <ContactItems
            textIcon="Giovanni Liotta"
            iconItem={linkedin}
            iconClass="linkedin"
            href="https://www.linkedin.com/in/giovanniliotta/"
          />

          <ContactItems
            textIcon="gioliotta"
            iconItem={github}
            iconClass="github"
            href="https://github.com/gioliotta"
          />

          <ContactItems
            textIcon="gioliotta.io@gmail.com"
            iconItem={email}
            iconClass="email"
            href="gioliotta.io@gmail.com"
          />
        </ul>
      </nav>
    </section>
  );
}

export default Contact;
