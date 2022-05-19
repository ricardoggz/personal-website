import React, { useState } from "react";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { NavWrapper, NavList, Logo, NavItems } from "./elements";

const NavBar = () => {
  const [ menu, setMenu] = useState(false);
  const showMenu = () => {
    setMenu(!menu);
  }
  return (
    <NavWrapper>
      <NavList className="flex-container">
        <Logo><a href="#">RGDEV</a></Logo>
        <button onClick={showMenu}>
          {menu ? <FaTimesCircle /> : <FaBars />}
        </button>
        <NavItems open={menu}>
          <li><a href="#" onClick={showMenu}>Inicio</a></li>
          <li><a href="#about" onClick={showMenu}>Sobre mí</a></li>
          <li><a href="#portfolio" onClick={showMenu}>Portafolio</a></li>
        </NavItems>
      </NavList>
    </NavWrapper>
  );
};

export default NavBar;
