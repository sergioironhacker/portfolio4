import "../../styles/aboutme.css";

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutme__tittle">Sobre Mí</h2>

      <div>
        <p className="aboutme__text">
          Inicié mi aprendizaje de forma autodidacta utilizando plataformas como
          Udemy, CoderHouse, entre otras.
          <br />
          <br />
          He estado mejorando mis habilidades durante más de un año, centrándome
          en el desarrollo front-end. Trabajo con tecnologías como{" "}
          <span className="technologies__span"> HTML</span>,
          <span className="technologies__span"> CSS</span>,
          <span className="technologies__span"> Bootstrap</span>,
          <span className="technologies__span"> Tailwind</span>,
          <span className="technologies__span"> JavaScript</span>,
          <span className="technologies__span"> React Js</span> y
          <span className="technologies__span"> GIT</span>
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
      </div>
    </section>
  );
}

export default AboutMe;
