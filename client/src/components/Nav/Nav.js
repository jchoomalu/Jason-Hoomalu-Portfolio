import React, { useState, useEffect } from "react";
import { Navbar, NavDropdown, Image, Container } from "react-bootstrap";
import { useLocation } from "react-router";
import logo from "../../assets/images/jason_hoomalu_logo_long2.png";
import accent from "../../assets/images/accent.png";
import Icons from "../Icons";
import "./Nav.css";

function Navigation() {
  const [activeAbout, setActiveAbout] = useState("About Me");
  const [activeProjects, setActiveProjects] = useState("Projects");
  const [active, setActive] = useState("about");
  const location = useLocation(); // Get the current location using useLocation from React Router

  useEffect(() => {
    // Update active page based on the current location pathname
    switch (location.pathname) {
      case "/":
        setActiveAbout("About Me");
        setActiveProjects("Projects");
        setActive("about");
        break;
      case "/education":
        setActiveAbout("Education");
        setActive("about");
        break;
      case "/experience":
        setActiveAbout("Experience");
        setActive("about");
        break;
      case "/contact":
        setActiveAbout("Contact");
        setActive("");
        break;
      case "/wordslinger":
        setActiveProjects("Word Slinger");
        setActive("projects");
        break;
      case "/symbolsaga":
        setActiveProjects("Symbol Saga");
        setActive("projects");
        break;
      case "/ssmapeditor":
        setActiveProjects("SS Map Editor");
        setActive("projects");
        break;
      case "/testimonials":
        setActiveProjects("Testimonials");
        setActive("");
        break;
      case "/resume":
        setActiveProjects("Resume");
        setActive("");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  // all about links
  let aboutLinks = [
    <NavDropdown.Item key="0" href="/">About Me</NavDropdown.Item>,
    <NavDropdown.Item key="1" href="/education">Education</NavDropdown.Item>,
    <NavDropdown.Item key="2" href="/experience">Experience</NavDropdown.Item>,
  ];
  let projectLinks = [
    <NavDropdown.Item key="3" href="/symbolsaga">Symbol Saga</NavDropdown.Item>,
    <NavDropdown.Item key="4" href="/ssmapeditor">SS Map Editor</NavDropdown.Item>,
    <NavDropdown.Item key="5" href="/wordslinger">Word Slinger</NavDropdown.Item>,
  ];
  // filter active links
  if (active === "about") {
    aboutLinks = aboutLinks.filter(
      (link) => activeAbout !== link.props.children
    );
  }

  if (active === "projects") {
    projectLinks = projectLinks.filter(
      (link) => activeProjects !== link.props.children
    );
  }

  return (
    <>
      <Navbar className="main-nav" variant="dark" expand="md">
        <Icons />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="d-flex justify-content-evenly align-items-center mb-5">
            <NavDropdown
              className="pill-dropdown"
              title={activeAbout}
              id="aboutMeDropdown"
            >
              {aboutLinks}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/resume">Resume</NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand className="d-none d-md-block" href="/">
              <Image className="logo" src={logo} alt="Jason Hoomalu full stack developer" />
            </Navbar.Brand>
            <NavDropdown
              className="pill-dropdown"
              title={activeProjects}
              id="projectsDropdown"
            >
              {projectLinks}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/testimonials">
                Testimonials
              </NavDropdown.Item>
            </NavDropdown>
          </Container>
        </Navbar.Collapse>
      </Navbar>
      <Image className="accentbar" src={accent} alt="red and white 3d design" />
    </>
  );
}

export default Navigation;
