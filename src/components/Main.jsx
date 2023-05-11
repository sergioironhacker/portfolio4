import "../styles/main.css";
// import { useEffect } from "react";
// import meteor from "../assets/img/meteor.png";
// import satelite from "../assets/img/satelite.png";

function Main() {
  /* useEffect(() => {
  //   //? Name animation.
    const CONTAINER = document.getElementById("main__container");
    CONTAINER.addEventListener("click", () => {
      CONTAINER.classList.toggle("clicked");
    });

  //   //? Meteor animation.
    const METEOR = document.querySelector(".meteor");
    METEOR.classList.add("meteor-hidden");
    setTimeout(() => {
      METEOR.classList.remove("meteor-hidden");
    }, 22000);
    const SATELITE = document.querySelector(".satelite");
    SATELITE.classList.add("satelite-hidden");
    setTimeout(() => {
      SATELITE.classList.remove("satelite-hidden");
    }, 4000);
   }, []); */

  return (
    <main className="main">
      <div className="main__container" id="main__container">
        <h1 className="main__title">
          Giovanni Liotta
          <br />
          <br />
          {/* <span className="main__span">~</span> */}
          Frontend Developer
        </h1>
      </div>

      {/* <img src={meteor} className="meteor" />
      <img src={satelite} className="satelite" /> */}
    </main>
  );
}

export default Main;
