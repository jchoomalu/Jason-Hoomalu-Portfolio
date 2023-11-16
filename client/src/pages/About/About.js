import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import jason from "../../assets/images/jason_hoomalu.png";
import InnerNav from "../../components/InnerNav/InnerNav";
import "./About.css";

function About() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent("aboutme")
  },[])

  const handleContentChange = (newCurrent) => {
    setCurrent("");

    // A small delay before setting the new current state to retrigger the transition
    setTimeout(() => {
      setCurrent(newCurrent === current ? "" : newCurrent);
    }, 150);
  };

  return (
    <div>
      <Row className="about-container mx-auto">
        <InnerNav
          setCurrent={handleContentChange}
          page="about"
          linkOne="About Me"
          linkTwo="Biography"
          linkThree="Aspirations"
        />
        <div className="col-8 about-content-wrapper">
          <div className={`about-content ${current === "" ? 'hide' : ''}`}>
            {current === "aboutme" ? <h1>Hello, I am Jason Ho'omalu Full Stack Developer </h1> : ""}
            {current === "biography" ? <h1>add personal bio </h1> : ""}
            {current === "aspirations" ? <h1>add aspirations </h1> : ""}
          </div>
        </div>
        <Image className="col-4 about-image" src={jason} />
      </Row>
    </div>
  );
}

export default About;
