import React from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FooterWrapper, SocialContainer, SocialList, CopyRight } from "./footer.elements";

export const Footer = () => {
  return (
    <FooterWrapper>
      <SocialContainer className="flex-container">
          <span>RICARDODEV</span>
        <SocialList>
          <ul>
            <li><a href="https://github.com/ricardoggz" target={"_blank"}  rel="noreferrer"><BsGithub /></a></li>
            <li><a href="https://www.linkedin.com/in/ricardoguevarag-a33657216/" target={"_blank"}  rel="noreferrer"><BsLinkedin /></a></li>
            <li><a href="https://www.instagram.com/ricardo_guevarag/?hl=es-la" target={"_blank"}  rel="noreferrer"><BsInstagram /></a></li>
            <li><a href="mailto:ricardo_ggzicm@outlook.com" ><FiMail /></a></li>
          </ul>
        </SocialList>
      </SocialContainer>
      <CopyRight>
          &copy; Hecho con 💙 por <a href="https://github.com/ricardoggz" target={"_blank"}  rel="noreferrer">@ricardoggz</a>
      </CopyRight>
    </FooterWrapper>
    
  );
};
