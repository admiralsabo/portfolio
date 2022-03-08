import React, { useState } from "react";
import { Nav, Menu, MenuLinks, Humburger, Logo } from "./styles";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Humburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Humburger>
      <Menu isOpen={isOpen}>
        <MenuLinks href="#">About me</MenuLinks>
        <MenuLinks href="#">Services</MenuLinks>
        <MenuLinks href="#">Skills</MenuLinks>
        <MenuLinks href="#">Projects</MenuLinks>
      </Menu>
    </Nav>
  );
};

export default NavBar;
