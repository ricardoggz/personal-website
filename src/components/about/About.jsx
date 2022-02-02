import React from "react";
import {
  AboutWrapper,
  AboutDescription,
  SkillsWrapper,
  SkillCard,
  Tools,
} from "./about.elements";

export const About = () => {
  return (
    <AboutWrapper id="about">
      <center>
        <span>Sobre mí</span>
      </center>
      <AboutDescription className="flex-container">
        Desarrollador Frontend, apasionado por la programación y actualmente me
        encuentro estudiando el 4to año de la Ingeniería en Comunicación
        Multimedia.
      </AboutDescription>
      <SkillsWrapper className="flex-container">
        <SkillCard>
          <span>Skills (vanilla stack)</span>
          <ul>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>Github</li>
          </ul>
        </SkillCard>
        <SkillCard>
          <span>Skills (frameworks y librerías)</span>
          <ul>
            <li>React JS</li>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>Bootstrap</li>
            <li>Styled Components</li>
          </ul>
        </SkillCard>
      </SkillsWrapper>
    </AboutWrapper>
  );
};
