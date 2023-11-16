import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import jason from "../../assets/images/jason_hoomalu.png";
import InnerNav from "../../components/InnerNav/InnerNav";
import "./Education.css";

function Education() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent("languages")
  },[])

  const handleContentChange = (newCurrent) => {
    setCurrent("");

    // A small delay before setting the new current state to retrigger the transition
    setTimeout(() => {
      setCurrent(newCurrent === current ? "" : newCurrent);
    }, 50);
  };

  return (
    <div>
      <Row className="about-container mx-auto">
        <InnerNav
          setCurrent={handleContentChange}
          page="education"
          linkOne="Languages"
          linkTwo="Front-End"
          linkThree="Back-End"
        />
        <div className="col-8 about-content-wrapper">
          <div className={`about-content ${current === "" ? 'hide' : ''}`}>
            {current === "languages" ? <h1>add languages </h1> : ""}
            {current === "front-end" ? <h1>add front end xp </h1> : ""}
            {current === "back-end" ? <h1>add backend xp </h1> : ""}
          </div>
        </div>
        <Image className="col-4 about-image" src={jason} />
      </Row>
    </div>
  );
}

export default Education;
