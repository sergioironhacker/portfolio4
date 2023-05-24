import "../styles/contact.css";
import Background from "../components/background/Background";
import BackArrow from "../components/backArrow/BackArrow";
import ContactItems from "../components/contactItems/ContactItems";
import linkedin from "../assets/img/linkedinSvg.svg";
import github from "../assets/img/githubSvg.svg";
import email from "../assets/img/emailSvg.svg";
import cv from "../assets/img/cvSvg.svg";

function Contact() {
  return (
    <section className="contact">
      <Background />

      <BackArrow />

      <h2 className="contact__title">Medios de contacto</h2>
      <nav className="contact__nav">
        <ul className="contact__list">
          <ContactItems
            iconItem={linkedin}
            textIcon="Giovanni Liotta"
            href="https://www.linkedin.com/in/giovanniliotta/"
            iconClass="linkedin"
          />

          <ContactItems
            iconItem={github}
            textIcon="gioliotta"
            href="https://github.com/gioliotta"
            iconClass="github"
          />

          <ContactItems
            iconItem={email}
            textIcon="gioliotta.io@gmail.com"
            iconClass="email"
          />

          <ContactItems
            iconItem={cv}
            textIcon="Ver CV"
            href="/cv-giovanni-liotta.pdf"
            iconClass="cv"
          />
        </ul>
      </nav>
    </section>
  );
}

export default Contact;
