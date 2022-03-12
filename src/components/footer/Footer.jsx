import React from "react";
import { Logo } from "../Nav/elements";
import { FiMail } from "react-icons/fi";
import { FooterWrapper, FooterList, Copyright } from "./elements";
import { BsGithub , BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <FooterWrapper>
      <FooterList className="flex-container">
        <Logo>
          <a href="#">RGDEV</a>
        </Logo>
        <ul>
          <li><a href="#"><BsGithub /></a></li>
          <li><a href="#"><BsFacebook /></a></li>
          <li><a href="#"><BsInstagram /></a></li>
          <li><a href="#"><FiMail /></a></li>
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
