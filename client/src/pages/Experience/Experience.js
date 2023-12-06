import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import InformationBlock from "../../components/InformationBlock";
import jason from "../../assets/images/jason_hoomalu.png";
import InnerNav from "../../components/InnerNav/InnerNav";
import "./Experience.css";

function Experience() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent("classroom");
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
          page="experience"
          linkOne="Classroom"
          linkTwo="Military"
          linkThree="Volunteer"
        />
        <div className="col-12 col-md-7 offset-md-1 p-3 about-content-wrapper">
          <div className={`about-content ${current === "" ? "hide" : ""}`}>
            {current === "classroom" ? (
              <InformationBlock>
                <h2>Classroom Experience</h2>
                <h5>Full-Stack from the ground up</h5>
                <p>
                  Experienced in MERN stack development, adeptly handling
                  front-end (React), back-end (Node.js), and databases (MongoDB)
                  to create robust, scalable applications. Proficient in
                  utilizing HTML, CSS, and JavaScript to craft responsive
                  interfaces, while employing Express.js to build RESTful APIs.
                  Skilled in database management and ensuring seamless
                  integration across the entire application. Collaborative team
                  player with a commitment to staying updated on emerging trends
                  and technologies in the MERN and other ecosystems.
                </p>
              </InformationBlock>
            ) : (
              ""
            )}
            {current === "military" ? (
              <InformationBlock>
                <h2>Military Experience</h2>
                <h5>Service with commitment and honor</h5>
                <p>
                  Served in the U.S. Army with dedication and discipline,
                  demonstrating strong leadership and teamwork in challenging
                  environments. Proficient in strategic planning,
                  problem-solving, and executing tasks under pressure. Acquired
                  skills in logistics, organization, and adaptability while
                  prioritizing mission objectives. Received accolades for valor,
                  integrity, and ability to perform effectively in diverse and
                  demanding situations. Demonstrated strong communication skills
                  and a commitment to upholding values of service, duty, and
                  honor.
                </p>
              </InformationBlock>
            ) : (
              ""
            )}
            {current === "volunteer" ? (
              <InformationBlock>
                <h2>Volunteer Experience</h2>
                <h5>Community engagement</h5>
                <p>
                  My commitment to service did not end in the military. I offer
                  Weekly support of approximately 15-25 youth at the Youth
                  Resource Center. I help with homework, emotional challenges,
                  conversation, and pro-social skills. I assist in developing
                  youth competence and confidence through connection and
                  meaningful contribution. I do so by actively listening and
                  encouraging healthy decision making while being present and
                  engaged.
                </p>
              </InformationBlock>
            ) : (
              ""
            )}
          </div>
        </div>
        <Image className="about-image col-4 col-xl-3 offset-xl-1 d-none d-md-block" src={jason}/>

      </Row>
    </div>
    </>
  );
}

export default Experience;
