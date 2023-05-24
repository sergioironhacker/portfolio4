import "../styles/aboutme.css";
import Background from "../components/background/Background";
import BackArrow from "../components/backArrow/BackArrow";
import Technologies from "../components/aboutMe/Technologies";
import CVButton from "../components/aboutMe/CVButton";

function AboutMe() {
  return (
    <section className="aboutme">
      <Background />
      <BackArrow />
      <h2 className="aboutme__tittle">Sobre Mí</h2>
      <p className="aboutme__text">
        Inicié mi aprendizaje de forma autodidacta utilizando plataformas como
        Udemy, CoderHouse, entre otras.
        <br />
        <br />
        He estado mejorando mis habilidades durante más de un año, centrándome
        en el desarrollo front-end. Trabajo con tecnologías como{" "}
        <Technologies />
        <br />
        <br />
        Mi enfoque es crear sitios web responsive con experiencias de usuario
        atractivas y funcionales. Utilizo programas de diseño como Figma para
        asegurarme de que los sitios sean intuitivos para los usuarios.
        <br />
        <br />
        Estoy interesado en aportar valor a la empresa y contribuir al
        crecimiento del equipo. Tengo 20 años de edad y vivo en Mendoza,
        Argentina.
      </p>

      <CVButton />
    </section>
  );
}

export default AboutMe;
