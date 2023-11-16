import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import jason from "../../assets/images/jason_hoomalu.png";
import InnerNav from "../../components/InnerNav/InnerNav";
import "./Experience.css";

function Experience() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent("classroom")
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
          page="experience"
          linkOne="Classroom"
          linkTwo="Military"
          linkThree="Volunteer"
        />
        <div className="col-8 about-content-wrapper">
          <div className={`about-content ${current === "" ? 'hide' : ''}`}>
            {current === "classroom" ? <h1>add classroom xp </h1> : ""}
            {current === "military" ? <h1>add military xp </h1> : ""}
            {current === "volunteer" ? <h1>add Volunteer </h1> : ""}
          </div>
        </div>
        <Image className="col-4 about-image" src={jason} />
      </Row>
    </div>
  );
}

export default Experience;
