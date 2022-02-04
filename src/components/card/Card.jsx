import React from "react";
import Typed from "react-typed";
import { CardWrapper, CardText } from "./card.elements";
export const Card = () => {
  return (
    <CardWrapper>
      <CardText>
        <span className="title">Ricardo Guevara</span>
        <span className="subtitle">
          <Typed
            strings={["Desarrollador Frontend"]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </span>
      </CardText>
    </CardWrapper>
  );
};
