import "../../styles/aboutme.css";

function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <h2 className="aboutme__tittle">Sobre Mí</h2>

      <div>
        <p className="aboutme__text">
          Me encuentro trabajando como desarrollador freelance, en equipo con
          programadores y diseñadores, tanto en aplicaciones web y móviles.
          <br />
          <br />
          Trabajo con tecnologías como:
          <br />
          <span className="technologies__span"> Next.js</span>,
          <span className="technologies__span">React.js</span>,
          <span className="technologies__span"> React Native</span>,
          <span className="technologies__span"> Node.js</span>,
          <span className="technologies__span"> Express.js</span>,
          <span className="technologies__span"> GIT</span>,
          <span className="technologies__span"> Firebase</span>,
          <span className="technologies__span"> MongoDB</span>,
          <span className="technologies__span"> JavaScript</span>,
          <span className="technologies__span"> styled-componentes</span>,
          <span className="technologies__span"> Tailwind</span>,
          <span className="technologies__span"> CSS</span> y
          <span className="technologies__span"> HTML</span>.
          <br />
          <br />
          Estoy interesado en aportar valor a la empresa y contribuir al
          crecimiento del equipo.
          <br />
          <br />
          Si tienes alguna consulta, no dudes en contactarme.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
