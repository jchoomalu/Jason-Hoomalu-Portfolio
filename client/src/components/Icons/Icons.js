import React from "react"
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./Icons.css"

const Icons = () => {
  return (
    <div className="d-flex nav-icons px-2 px-md-5">
      <a className="text-white fs-1 p-1 mx-1" target="_blank" href="https://github.com/jchoomalu" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <br />
      <a className="text-white fs-1 p-1 mx-1" target="_blank" href="https://www.linkedin.com/in/jason-hoomalu/" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Icons;