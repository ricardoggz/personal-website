import React from "react";
import AnchorButton from "../anchorButton/AnchorButton";
import { AboutWrapper, AboutDescription } from "./elements";

const About = () => {
  return (
    <AboutWrapper className="flex-container">
      <AboutDescription>
        <h1>Sobre mí</h1>
        <p>
          ¡Hola! 🤚, soy desarrollador JavaScript, me gusta crear soluciones
          digitales a la medida. También soy apasionado por la programación y
          las tecnologías de la información. Actualmente curso el último año de
          la Ingeniería en Comunicación Multimedia.
        </p>
        <div className="buttons">
          <AnchorButton title="Ver mi CV" />
          <AnchorButton title="Mandar Mensaje" />
        </div>
      </AboutDescription>
    </AboutWrapper>
  );
};

export default About;
