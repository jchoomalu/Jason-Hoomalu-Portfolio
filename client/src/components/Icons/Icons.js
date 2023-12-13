import React from "react";
import { Image } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import jason from "../../assets/images/jason_hoomalu.png";
import "./Icons.css";

const Icons = () => {
  return (
    <div className="d-flex nav-icons px-2 px-md-5">
      <a
        className="text-white fs-1 p-1 mx-1"
        target="_blank"
        href="https://github.com/jchoomalu"
        rel="noopener noreferrer"
      >
        <FaGithub className="icon" />
      </a>
      <br />
      <a
        className="text-white fs-1 p-1 mx-1"
        target="_blank"
        href="https://www.linkedin.com/in/jason-hoomalu/"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="icon" />
      </a>
      <br />
      <div className="img-container">
      <a
      href="/contact"
      >
      <Image className="d-block d-md-none jason-icon" src={jason} alt="Jason Hoomalu professinal icon"></Image>
      </a>
      </div>
    </div>
  );
};

export default Icons;
