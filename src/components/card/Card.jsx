import React from "react";
import { CardWrapper, ImageContainer, CardText } from "./card.elements";
export const Card = () => {
  return (
    <CardWrapper>
      <CardText>
        <span className="title">Ricardo Guevara</span>
        <span className="subtitle">Desarrollador Frontend</span>
      </CardText>
    </CardWrapper>
  );
};
