import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./InnerNav.css"

function InnerNav({page, linkOne, linkTwo, linkThree, setCurrent }) {
  
  const handleCurrent = (event) => {
    setCurrent(event.target.name.toLowerCase().replaceAll(" ", ""))
  }
  return (
    <Navbar variant="dark" className="inner-nav">
    <Navbar id="inner-navbar">
      <Nav className="mr-auto p-4 p-sm-0 ">
        <Nav.Link onClick={handleCurrent} name={linkOne} className="p-2">{linkOne}</Nav.Link>
        <Nav.Link onClick={handleCurrent} name={linkTwo} className="p-2">{linkTwo}</Nav.Link>
        <Nav.Link onClick={handleCurrent} name={linkThree} className="p-2">{linkThree}</Nav.Link>
      </Nav>
    </Navbar>
  </Navbar>
  );
}

export default InnerNav;