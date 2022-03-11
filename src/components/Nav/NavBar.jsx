import React from "react";
import { NavWrapper, NavList, Logo } from "./elements";

const NavBar = () => {
  return (
    <NavWrapper>
      <NavList className="flex-container">
        <Logo><a href="#">RGDEV</a></Logo>
        <ul>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#portfolio">Portafolio</a></li>
        </ul>
      </NavList>
    </NavWrapper>
  );
};

export default NavBar;
