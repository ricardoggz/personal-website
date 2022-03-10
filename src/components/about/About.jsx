import React from "react";
import computer from "../../img/computer.png";
import { AboutWrapper, AboutImage, AboutDescription } from "./elements";

const About = () => {
  return (
    <AboutWrapper className="flex-container">
      <AboutDescription>
        <h1>Sobre mí</h1>
        <p>
          ¡Hola! 🤚, soy desarrollador JavaScript, me gusta crear soluciones
          digitales a la medida. Así como también apasionado por la programación y las tecnologías de la información. Actualmente curso el último año de la Ingeniería en Comunicación Multimedia.
        </p>
      </AboutDescription>
      <img src={computer} />
    </AboutWrapper>
  );
};

export default About;
