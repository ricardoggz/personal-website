import React from "react";
import { Button } from "../button/Button";
import {
  AboutWrapper,
  AboutDescription,
  SkillsWrapper,
  SkillCard,
  ButtonsContainer,
} from "./about.elements";

export const About = () => {
  return (
    <AboutWrapper id="about">
      <center>
        <span>Sobre mí</span>
      </center>
      <AboutDescription className="flex-container">
        Desarrollador Frontend, apasionado por la programación y el desarrollo
        web, me gusta crear soluciones digitales e interfaces de usuario interactivas, basadas en la experiencia del mismo. Actualmente me encuentro estudiando el último año de la Ingeniería en Comunicación Multimedia.
        <ButtonsContainer>
          <Button title="Escríbeme" url="mailto:ricardo_ggzicm@outlook.com" />
          <Button title="Ver Linkedin" url="https://www.linkedin.com/in/ricardoguevarag-a33657216/" />
        </ButtonsContainer>
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
