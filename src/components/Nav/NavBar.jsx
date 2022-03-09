import React from "react";
import logo from "../../img/logo.png";
import { NavWrapper, NavList, Logo } from "./elements";

const NavBar = () => {
  return (
    <NavWrapper>
      <NavList className="flex-container">
        <Logo><a href="#">RICARDODEV</a></Logo>
        <ul>
          <li><a href="#">Sobre mí</a></li>
          <li><a href="#">Sobre mí</a></li>
          <li><a href="#">Sobre mí</a></li>
        </ul>
      </NavList>
    </NavWrapper>
  );
};

export default NavBar;
