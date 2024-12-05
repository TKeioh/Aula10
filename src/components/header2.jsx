import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

function Header2 ({ component, ...args }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" {...args}>
        <NavbarBrand href="/">Gerenciamento de Projetos:</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            {component}
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header2;