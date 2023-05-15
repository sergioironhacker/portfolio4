import "../styles/contact.css";
import { useEffect, useState } from "react";
import BackArrow from "../components/BackArrow";
import Background from "../components/Background";
import ContactItems from "../components/ContactItems";
import linkedin from "../assets/img/linkedinSvg.svg";
import github from "../assets/img/githubSvg.svg";
import email from "../assets/img/emailSvg.svg";

function Contact() {
  const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    const preloadedImages = [linkedin, github, email];
    const imagePromises = preloadedImages.map(imageSrc => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = imageSrc;
        image.onload = resolve;
        image.onerror = reject;
      });
    });

    Promise.all(imagePromises)
      .then(() => {
        setSvgLoaded(true);
      })
      .catch(error => {
        console.error("Error preloading images:", error);
      });
  }, []);
  return (
    <section className="contact">
      <Background />
      <BackArrow />

      <h2 className="contact__title">Medios de contacto</h2>
      <nav className="contact__nav">
        <ul className="contact__list">
          <ContactItems
            svgLoaded={setSvgLoaded}
            textIcon="Giovanni Liotta"
            iconItem={linkedin}
            iconClass="linkedin"
            href="https://www.linkedin.com/in/giovanniliotta/"
          />

          <ContactItems
            svgLoaded={setSvgLoaded}
            textIcon="gioliotta"
            iconItem={github}
            iconClass="github"
            href="https://github.com/gioliotta"
          />

          <ContactItems
            svgLoaded={setSvgLoaded}
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
