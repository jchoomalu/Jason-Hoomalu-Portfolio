import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./HireButtons.css";

function HireButtons() {
  return (
    <Navbar>
      <Nav>
        <Nav.Link className="p-2 hire-btn">Resume</Nav.Link>
        <Nav.Link href="/contact" className="p-2 hire-btn">
          Hire Me
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default HireButtons;
