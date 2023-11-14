import React from "react";
import { Navbar, NavDropdown, Image, Container } from "react-bootstrap";
import logo from "../../assets/images/jason_hoomalu_logo_long.png";
import accent from "../../assets/images/accent.png";
import "./Nav.css";

function Navigation() {
  return (
    <>
      <Navbar className="navbar" bg="light" variant="light" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="d-flex justify-content-evenly align-items-center">
            <NavDropdown title="About Me" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">About Me</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Education</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Experience</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand className="d-none d-md-block" href="#home">
              <Image className="logo" src={logo} />
            </Navbar.Brand>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Got Your Six</NavDropdown.Item>
              <NavDropdown.Item href="#">Symbol Saga</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SS Map Editor</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Contact</NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar.Collapse>
      </Navbar>
        <Image className="accentbar" src={accent} />
    </>
  );
}

export default Navigation;
