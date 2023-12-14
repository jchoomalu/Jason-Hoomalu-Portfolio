import React from "react";
import { Container, Nav, Image, Row } from "react-bootstrap";

import accent from "../../assets/images/accent.png";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer text-white">
      <Image
        className="accentbar"
        src={accent}
        alt="red and white 3d design"
      ></Image>
      <Row className="col-9 px-1 px-md-5 mx-2 mx-md-auto">
        <Container className="col-12 my-2 col-md-4">
          <h3>About Me</h3>
          <hr className="footer-divider" />
          <Nav.Link className="footer-link" href="/">About Me</Nav.Link>
          <Nav.Link className="footer-link" href="/education">Education</Nav.Link>
          <Nav.Link className="footer-link" href="/experience">Experience</Nav.Link>
          <Nav.Link className="footer-link" href="/testimonials">Testimonials</Nav.Link>
        </Container>
        <Container className="col-12 my-2 col-md-4">
          <h3>Projects</h3>
          <hr className="footer-divider" />
          <Nav.Link className="footer-link" href="/symbolsaga">Symbol Saga</Nav.Link>
          <Nav.Link className="footer-link" href="/ssmapeditor">SS Map Editor</Nav.Link>
          <Nav.Link className="footer-link" href="/wordslinger">Word Slinger</Nav.Link>
        </Container>
        <Container className="col-12 my-2 col-md-4">
          <h3>Contact</h3>
          <hr className="footer-divider" />
          <Nav.Link className="footer-link" href="/contact">Contact Me</Nav.Link>
          <Nav.Link className="footer-link" href="/resume">Resume</Nav.Link>
        </Container>
      </Row>
    </footer>
  );
};

export default Footer;
