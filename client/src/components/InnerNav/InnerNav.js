import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./InnerNav.css";

function InnerNav({ linkOne, linkTwo, linkThree, setCurrent }) {
  const handleCurrent = (event) => {
    setCurrent(event.target.name.toLowerCase().replaceAll(" ", ""));
  };
  return (
    <Navbar variant="dark" className="inner-nav">
      <Navbar id="inner-navbar">
        <Nav className="innernav-container">
          <Nav.Link onClick={handleCurrent} name={linkOne} className="first-link">
            {linkOne}
          </Nav.Link>
          <Nav.Link onClick={handleCurrent} name={linkTwo}>
            {linkTwo}
          </Nav.Link>
          <Nav.Link onClick={handleCurrent} name={linkThree}>
            {linkThree}
          </Nav.Link>
        </Nav>
      </Navbar>
    </Navbar>
  );
}

export default InnerNav;
