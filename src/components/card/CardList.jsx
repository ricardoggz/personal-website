import React from "react";
import { ListContainer } from "./card.elements";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export const CardList = () => {
  return (
    <ListContainer>
      <ul>
        <li>
          <a href="https://github.com/ricardoggz" target={"_blank"}>
            <BsGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ricardoguevarag-a33657216/"
            target={"_blank"} 
          >
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="mailto:ricardo_ggzicm@outlook.com">
            <FiMail />
          </a>
        </li>
      </ul>
    </ListContainer>
  );
};
