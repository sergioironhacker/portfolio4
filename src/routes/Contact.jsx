import "../styles/contact.css";
import Background from "../components/background/Background";
import BackArrow from "../components/backArrow/BackArrow";
import ContactItems from "../components/contactItems/ContactItems";
import linkedin from "../assets/img/linkedinSvg.svg";
import github from "../assets/img/githubSvg.svg";
import email from "../assets/img/emailSvg.svg";
import cv from "../assets/img/cvSvg.svg";

function Contact() {
  const CONTACT_ITEMS = [
    <ContactItems
      key="contact1"
      iconItem={linkedin}
      textIcon="Giovanni Liotta"
      href="https://www.linkedin.com/in/giovanniliotta/"
      iconClass="linkedin"
    />,

    <ContactItems
      key="contact2"
      iconItem={github}
      textIcon="gioliotta"
      href="https://github.com/gioliotta"
      iconClass="github"
    />,

    <ContactItems
      key="contact3"
      iconItem={email}
      textIcon="gioliotta.io@gmail.com"
      iconClass="email"
    />,

    <ContactItems
      key="contact4"
      iconItem={cv}
      textIcon="Ver CV"
      href="/cv-giovanni-liotta.pdf"
      iconClass="cv"
    />,
  ];

  return (
    <section className="contact">
      <Background />

      <BackArrow />

      <h2 className="contact__title">Medios de contacto</h2>
      <nav className="contact__nav">
        <ul className="contact__list">{CONTACT_ITEMS}</ul>
      </nav>
    </section>
  );
}

export default Contact;
