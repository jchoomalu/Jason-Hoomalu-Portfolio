import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import jason from "../../assets/images/jason_hoomalu.png";
import InnerNav from "../../components/InnerNav/InnerNav";
import InformationBlock from "../../components/InformationBlock";
import "./SymbolSaga.css";

function SymbolSaga() {
  const [current, setCurrent] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setCurrent("overview");
    if (isMobileDevice()) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [isMobile]);

  const handleContentChange = (newCurrent) => {
    setCurrent("");

    // A small delay before setting the new current state to retrigger the transition
    setTimeout(() => {
      setCurrent(newCurrent === current ? "" : newCurrent);
    }, 50);
  };

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  const ssPlay = "https://symbol-saga.netlify.app/";

  return (
    <>
      <div>
        <Row className="about-container mx-auto">
          <InnerNav
            setCurrent={handleContentChange}
            page="symbolsaga"
            linkOne="Overview"
            linkTwo="Technology"
            linkThree="Project"
          />
          <div className="col-12 col-md-7 offset-md-1 p-3 about-content-wrapper">
            <div className={`about-content ${current === "" ? "hide" : ""}`}>
              {current === "overview" ? (
                <InformationBlock>
                  <h2>Symbol Saga</h2>
                  <h5>Tile Based RPG</h5>
                  <p>
                    Symbol Saga is a tile based rogue-like RPG. Travel in an
                    imaginary world as lovable characters the classic RPG Final
                    Fantasy VII. The game is built entirely with HTML, CSS,
                    JavaScript and jQuery. I relied on Bootstrap 5 for
                    responsiveness, and animeJS for battle animations.
                  </p>
                  {!isMobile ?
                  <a href={ssPlay} target="_blank" rel="noopener noreferrer">
                    Play Symbol Saga Demo
                  </a> :
                   <p>(Demo not available on mobile)</p>}
                </InformationBlock>
              ) : (
                ""
              )}
              {current === "technology" ? (
                <InformationBlock>
                  <h2>Symbol Saga</h2>
                  <h5>Tile Based RPG</h5>
                  <p>
                    Symbol Saga is designed with object oriented programming
                    concepts in mind. It is built entirely on the front end with
                    HTML, CSS, JavaScript and jQuery. I relied on Bootstrap 5
                    for responsiveness, Semantic UI for consistent stlying and
                    animeJS for battle animations.
                  </p>
                  {!isMobile ?
                  <a href={ssPlay} target="_blank" rel="noopener noreferrer">
                    Play Symbol Saga Demo
                  </a> :
                  <p>(Demo not available on mobile)</p>}
                </InformationBlock>
              ) : (
                ""
              )}
              {current === "project" ? (
                <InformationBlock>
                  <h2>Symbol Saga</h2>
                  <h5>Tile Based RPG</h5>
                  {!isMobile ?
                  <a href={ssPlay} target="_blank" rel="noopener noreferrer">
                    Play Symbol Saga Demo
                  </a> :
                  <p>(Demo not available on mobile)</p>}
                </InformationBlock>
              ) : (
                ""
              )}
            </div>
          </div>
          <Image
            className="about-image col-4 col-xl-3 offset-xl-1 d-none d-md-block"
            src={jason}
          />
        </Row>
      </div>
    </>
  );
}

export default SymbolSaga;
