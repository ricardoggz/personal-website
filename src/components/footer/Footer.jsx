import React from "react";
import { Logo } from "../Nav/elements";
import { FiMail } from "react-icons/fi";
import { FooterWrapper, FooterList, Copyright } from "./elements";
import { BsGithub , BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <FooterWrapper>
      <FooterList className="flex-container">
        <Logo>
          <a href="#">RGDEV</a>
        </Logo>
        <ul>
          <li><a href="https://github.com/ricardoggz" target="_blank" rel="noreferrer"><BsGithub /></a></li>
          <li><a href="https://www.facebook.com/profile.php?id=100074168315960" target="_blank" rel="noreferrer"><BsFacebook /></a></li>
          <li><a href="https://www.instagram.com/ricardo_guevarag/?hl=es" target="_blank" rel="noreferrer"><BsInstagram /></a></li>
          <li><a href="https://www.linkedin.com/in/ricardoguevarag-a33657216/" target="_blank" rel="noreferrer"><BsLinkedin /></a></li>
          <li><a href="mailto:ricardo_ggzicm@outlook.com" target="_blank" rel="noreferrer"><FiMail /></a></li>
        </ul>
      </FooterList>
      
    </FooterWrapper>
    <Copyright>
      <span>&copy; RICARDEV💙 COPYRIGHT - 2022</span>
    </Copyright>
    </>
  );
};

export default Footer;
