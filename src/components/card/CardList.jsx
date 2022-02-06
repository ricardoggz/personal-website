import React from "react";
import { ListContainer } from "./card.elements";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export const CardList = () => {
  return (
      <ListContainer>
          <ul>
              <li><BsGithub /></li>
              <li><BsLinkedin /></li>
              <li><FiMail /></li>
          </ul>
      </ListContainer>
  );
};
