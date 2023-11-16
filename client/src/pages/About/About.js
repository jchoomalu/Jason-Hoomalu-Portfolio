import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import jason from "../../assets/images/jason_hoomalu.png";
import InnerNav from "../../components/InnerNav/InnerNav";
import InformationBlock from "../../components/InformationBlock";
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
    }, 10);
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
            {current === "aboutme" ? 
            <InformationBlock>
              <h2>I'm Jason, Full Stack Developer.</h2>
              <h5>Seeking meaningful, fair chance employment in technology.</h5>
              <p>I am commited to leveraging my knowledge to produce creative web experiences through innovative design.</p>
            </InformationBlock>

             : ""}
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
