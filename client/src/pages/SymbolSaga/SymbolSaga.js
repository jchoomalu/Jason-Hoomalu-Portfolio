import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import jason from "../../assets/images/jason_hoomalu.png";
import InnerNav from "../../components/InnerNav/InnerNav";
import "./SymbolSaga.css";

function SymbolSaga() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent("overview")
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
          page="symbolsaga"
          linkOne="Overview"
          linkTwo="Technology"
          linkThree="Project"
        />
        <div className="col-8 about-content-wrapper">
          <div className={`about-content ${current === "" ? 'hide' : ''}`}>
            {current === "overview" ? <h1>add ss overview </h1> : ""}
            {current === "technology" ? <h1>add ss tech info</h1> : ""}
            {current === "project" ? <h1>add ss project link </h1> : ""}
          </div>
        </div>
        <Image className="col-4 about-image" src={jason} />
      </Row>
    </div>
  );
}

export default SymbolSaga;