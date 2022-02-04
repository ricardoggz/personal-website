import React from "react";
import { CardWrapper } from "./card.elements";

export const CardProject = ({ image, url }) => {
  return (
    <CardWrapper>
      <figure>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={image} alt="loading" />
        </a>
      </figure>
    </CardWrapper>
  );
};
