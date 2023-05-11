import "../styles/aboutme.css";
import Background from "../components/Background";
import BackArrow from "../components/BackArrow";

function AboutMe() {
  return (
    <section className="aboutme">
      <Background />

      <BackArrow />

      <h2 className="aboutme__tittle">Sobre Mi</h2>
      <p className="aboutme__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        facilisis risus vel justo fermentum, eget dignissim libero volutpat.
        Duis eu bibendum tellus. Nam pretium ex vel enim ultricies, quis
        bibendum orci ultrices.In hac habitasse platea dictumst. Pellentesque
        quis congue orci, non efficitur augue. Praesent euismod vitae orci ac
        tincidunt. Fusce mollis finibus neque id lacinia. Fusce fringilla
        ultricies massa, non feugiat sapien. Donec sed efficitur nulla, ut
        eleifend mi. Sed maximus elit et elit hendrerit scelerisque. Quisque
        malesuada libero eget tellus sollicitudin, eget malesuada tellus
        efficitur. Vivamus quis neque et nisi suscipit placerat in sed ipsum.
        Cras at mollis diam. Curabitur ac urna tristique, vestibulum enim lot
        huujnbf no quis congue orci, non efficitur augue. Praesent euismod vitae
      </p>
    </section>
  );
}

export default AboutMe;
