import React from "react";
import { ProjectWrapper, CardsContainer } from "./card.elements";
import { cardData } from "./card.data";
import { CardProject } from "./CardProject";

export const Projects = () => {
  return (
    <ProjectWrapper id="projects">
      <center>
        <span>Mis proyectos</span>
      </center>
      <CardsContainer className="flex-container">
        {cardData.map((card) => (
          <CardProject image={card.image} title={card.title} />
        ))}
      </CardsContainer>
    </ProjectWrapper>
  );
};
