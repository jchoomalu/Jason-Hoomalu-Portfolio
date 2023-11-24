import React, { useEffect, useState } from "react";
import { Image, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import jason from "../../assets/images/jason_hoomalu.png";
import InnerNav from "../../components/InnerNav/InnerNav";
import InformationBlock from "../../components/InformationBlock";
import HireButtons from "../../components/HireButtons";
import Footer from "../../components/Footer/Footer";
import "./Education.css";

function Education() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent("languages");
  }, []);

  const handleContentChange = (newCurrent) => {
    setCurrent("");

    // A small delay before setting the new current state to retrigger the transition
    setTimeout(() => {
      setCurrent(newCurrent === current ? "" : newCurrent);
    }, 50);
  };

  return (
    <>
    <div>
      <Row className="about-container mx-auto">
        <InnerNav
          setCurrent={handleContentChange}
          page="education"
          linkOne="Languages"
          linkTwo="Front-End"
          linkThree="Full-Stack"
        />
        <div className="col-12 col-md-7 offset-md-1 p-3 about-content-wrapper">
          <div className={`about-content ${current === "" ? "hide" : ""}`}>
            {current === "languages" ? (
              <InformationBlock>
                <h2>Language And Skill Proficiencies</h2>
                <Container>
                  <Row className="skill-list mx-auto">
                    <ul className="col-4 offset-1 col-md-6">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>RegEx</li>
                      <li>Bootstrap</li>
                    </ul>
                    <ul className="col-6 col-md-4">
                      <li>MongoDB</li>
                      <li>Mongoose</li>
                      <li>Express</li>
                      <li>React</li>
                      <li>Node</li>
                      <li>Git</li>
                    </ul>
                  </Row>
                </Container>
                <HireButtons />
              </InformationBlock>
            ) : (
              ""
            )}
            {current === "front-end" ? (
              <InformationBlock>
                <h2>Front-End Education</h2>
                <h5>
                  The Last Mile — Web Development Fundamentals September 2022 -
                  March 2023
                </h5>
                <p>
                  Completed a six month in-person, intensive coding program
                  focusing on front-end technologies including HTML, CSS,
                  Javascript, Jquery, responsive web designs well as debugging
                  and performance optimization.
                </p>
                <h5>
                  {" "}
                  Want to see more? Check out my{" "}
                  <Link to="/allprojects">Projects Page</Link>
                </h5>
                <HireButtons />
              </InformationBlock>
            ) : (
              ""
            )}
            {current === "full-stack" ? (
              <InformationBlock>
                <h2>Full-Stack Education</h2>
                <h5>The Last Mile — MERN March 2023 - October 2023</h5>
                <p>
                  Six month in-person, intensive coding program focusing on
                  back-end technologies, specifically Mongo, Express, React, and
                  Node. Throughout this program, my focus was on honing skills
                  in full-stack application development and database management.
                  More significantly, the course equipped me with valuable
                  problem-solving abilities, along with the capability to
                  conduct in-depth research and troubleshoot technical issues
                  effectively.
                </p>
                <h5>
                  {" "}
                  Want to see more? Check out my{" "}
                  <Link to="/allprojects">Projects Page</Link>
                </h5>
                <HireButtons />
              </InformationBlock>
            ) : (
              ""
            )}
          </div>
        </div>
        <Image className="about-image col-4 col-xl-3 offset-xl-1 d-none d-md-block" src={jason}/>
      </Row>
    </div>
    <Footer />
    </>
  );
}

export default Education;
