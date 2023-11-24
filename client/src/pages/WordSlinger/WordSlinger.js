import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import jason from "../../assets/images/jason_hoomalu.png";
import InnerNav from "../../components/InnerNav/InnerNav";
import InformationBlock from "../../components/InformationBlock";
import HireButtons from "../../components/HireButtons";
import "./WordSlinger.css";

function WordSlinger() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent("overview");
  }, []);

  const handleContentChange = (newCurrent) => {
    setCurrent("");

    // A small delay before setting the new current state to retrigger the transition
    setTimeout(() => {
      setCurrent(newCurrent === current ? "" : newCurrent);
    }, 50);
  };

  const wsPlay = "https://delicate-florentine-3bfa34.netlify.app/";

  return (
    <div>
      <Row className="about-container mx-auto">
        <InnerNav
          setCurrent={handleContentChange}
          page="wordslinger"
          linkOne="Overview"
          linkTwo="Technology"
          linkThree="Project"
        />
        <div className="col-12 col-md-7 offset-md-1 p-3 about-content-wrapper">
          <div className={`about-content ${current === "" ? "hide" : ""}`}>
            {current === "overview" ? (
              <InformationBlock>
                <h2>Word Slinger</h2>
                <h5>Interactive word quiz</h5>
                <p>
                  Engages users with a dynamic, interactive challenge. Utilize
                  DOM manipulation for a sleek interface. Present random words,
                  prompt user input, and validate responses. Implements scoring
                  for added excitement. Enhanced with simple animations and
                  tracks progress to provide feedback for an engaging learning
                  experience.
                </p>
                <a href={wsPlay} target="_blank" rel="noopener noreferrer">
                  Play Word Slinger
                </a>
                <HireButtons />
              </InformationBlock>
            ) : (
              ""
            )}
            {current === "technology" ? (
              <InformationBlock>
                <h2>Word Slinger</h2>
                <h5>Interactive word quiz</h5>
                <p>
                  Captivating quiz game using JavaScript, jQuery, HTML, and CSS.
                  Employs JavaScript for logic, jQuery for DOM manipulation, and
                  CSS for styling. Implement logic score tracking, and dynamic
                  UI elements to enhance user experience. Showcases proficiency
                  in front-end technologies, interactivity, and responsive
                  design.
                </p>
                <a href={wsPlay} target="_blank" rel="noopener noreferrer">
                  Play Word Slinger
                </a>
                <HireButtons />
              </InformationBlock>
            ) : (
              ""
            )}
            {current === "project" ? (
              <InformationBlock>
                <h2>Word Slinger</h2>
                <h5>Interactive quiz game</h5>
                <a href={wsPlay} target="_blank" rel="noopener noreferrer">
                  Play Word Slinger
                </a>
                <HireButtons />
              </InformationBlock>
            ) : (
              ""
            )}
          </div>
        </div>
        <Image
          className="about-image col-4 col-xl-3 offset-xl-1 d-none d-md-block"
          src={jason}
        />      </Row>
    </div>
  );
}

export default WordSlinger;
