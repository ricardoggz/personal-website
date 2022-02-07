import React from "react";
import { ListContainer } from "./card.elements";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export const CardList = () => {
  return (
      <ListContainer>
          <ul>
              <li><a href="#"><BsGithub /></a></li>
              <li><a href="#"><BsLinkedin /></a></li>
              <li><a href="#"><FiMail /></a></li>
          </ul>
      </ListContainer>
  );
};
