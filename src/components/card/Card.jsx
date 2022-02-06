import React from "react";
import Typed from "react-typed";
import { CardWrapper, CardText, ButtonContainer } from "./card.elements";
import { Button } from "../button/Button";
import { CardList } from "./CardList";

export const Card = () => {
  return (
    <CardWrapper>
      <CardText>
        <span className="title">Ricardo Guevara</span>
        <span className="subtitle">
          <Typed
            strings={["Desarrollador Frontend", "Desarrollador React"]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </span>
        <CardList />
        <ButtonContainer>
          <Button title="Saber más" url="#about" />
        </ButtonContainer>
      </CardText>
    </CardWrapper>
  );
};
