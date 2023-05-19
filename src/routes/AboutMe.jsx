import "../styles/aboutme.css";
import Technologies from "../components/Technologies";
import CVButton from "../components/CVButton";
import Background from "../components/Background";
import BackArrow from "../components/BackArrow";

function AboutMe() {
  return (
    <section className="aboutme">
      <Background />
      <BackArrow />
      <h2 className="aboutme__tittle">Sobre Mi</h2>
      <p className="aboutme__text">
        Inicié mi aprendizaje de forma autodidacta utilizando plataformas como
        Udemy, CoderHouse, entre otros.
        <br />
        <br />
        Llevo más de un año mejorando mis habilidades enfocadas en el front-end,
        desarrollando con tecnologías como <Technologies />
        <br />
        <br />
        Creo sitios web responsive con experiencias de usuario atractivas,
        empleando programas de diseño como Figma, con el objetivo de que sean
        intuitivas y funcionales para el usuario.
        <br />
        <br />
        Me interesa aportar valor a la empresa y contribuir al crecimiento del
        equipo. Tengo 20 años de edad y vivo en Mendoza, Argentina.
      </p>

      {/* <CVButton /> */}
    </section>
  );
}

export default AboutMe;
