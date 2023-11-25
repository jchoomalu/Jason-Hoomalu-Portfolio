import React, { useState, useEffect } from "react";
import { Navbar, NavDropdown, Image, Container } from "react-bootstrap";
import { useLocation } from "react-router";
import logo from "../../assets/images/jason_hoomalu_logo_long2.png";
import accent from "../../assets/images/accent.png";
import "./Nav.css";

function Navigation() {
  const [activeAbout, setActiveAbout] = useState("About Me");
  const [activeProjects, setActiveProjects] = useState("Projects");
  const location = useLocation(); // Get the current location using useLocation from React Router

  useEffect(() => {
    // Update active page based on the current location pathname
    switch (location.pathname) {
      case "/":
        setActiveAbout("About Me");
        setActiveProjects("Projects");
        break;
      case "/education":
        setActiveAbout("Education");
        break;
      case "/experience":
        setActiveAbout("Experience");
        break;
      case "/contact":
        setActiveAbout("Contact");
        break;
      case "/wordslinger":
        setActiveProjects("Word Slinger");
        break;
      case "/symbolsaga":
        setActiveProjects("Symbol Saga");
        break;
      case "/ssmapeditor":
        setActiveProjects("SS Map Editor");
        break;
      case "/testimonials":
        setActiveProjects("Testimonials");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <>
    <Navbar className="main-nav" variant="dark" expand="md">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Container className="d-flex justify-content-evenly align-items-center mb-5">
          <NavDropdown className="pill-dropdown" title={activeAbout} id="aboutMeDropdown">
            <NavDropdown.Item href="/">About Me</NavDropdown.Item>
            <NavDropdown.Item href="/education">Education</NavDropdown.Item>
            <NavDropdown.Item href="/experience">Experience</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
            <NavDropdown.Item href="/resume">Resume</NavDropdown.Item>
          </NavDropdown>
          <Navbar.Brand className="d-none d-md-block" href="/">
            <Image className="logo" src={logo} />
          </Navbar.Brand>
          <NavDropdown className="pill-dropdown" title={activeProjects} id="projectsDropdown">
            <NavDropdown.Item href="/symbolsaga">Symbol Saga</NavDropdown.Item>
            <NavDropdown.Item href="/ssmapeditor">SS Map Editor</NavDropdown.Item>
            <NavDropdown.Item href="/wordslinger">Word Slinger</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/testimonials">Testimonials</NavDropdown.Item>
            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar.Collapse>
    </Navbar>
      <Image className="accentbar" src={accent} alt="red and white 3d design" />
  </>
  );
}

export default Navigation;


