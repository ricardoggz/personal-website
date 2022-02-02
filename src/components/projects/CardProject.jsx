import React from "react";
import { CardWrapper } from "./card.elements";

export const CardProject = ({ image, title }) => {
  return (
    <CardWrapper>
      <figure>
        <img src={image} />
      </figure>
      <div>
        <center>
          <span>{title}</span>
        </center>
      </div>
    </CardWrapper>
  );
};
