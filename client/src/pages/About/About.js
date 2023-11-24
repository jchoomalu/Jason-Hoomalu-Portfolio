import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import jason from "../../assets/images/jason_hoomalu.png";
import InnerNav from "../../components/InnerNav/InnerNav";
import InformationBlock from "../../components/InformationBlock";
import HireButtons from "../../components/HireButtons/";
import Footer from "../../components/Footer/Footer";
import "./About.css";

function About() {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    setCurrent("aboutme");
  }, []);

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
        <div className="col-12 col-md-7 offset-md-1 p-3 about-content-wrapper">
          <div className={`about-content ${current === "" ? "hide" : ""}`}>
            {current === "aboutme" ? (
              <InformationBlock>
                <h2>I'm Jason, Full Stack Developer</h2>
                <h5>
                  Seeking meaningful, fair chance employment in technology
                </h5>
                <p>
                  Innovative and dedicated professional committed to ongoing
                  education and growth. I have passion for untangling intricate
                  challenges with logic and creativity. I thrive on complexity
                  and flourish on design. My goal is to craft intuitive and
                  user-friendly UX/UI components, utilizing my expertise to
                  simplify everyday experiences for users.
                </p>
                <HireButtons />
              </InformationBlock>
            ) : (
              ""
            )}
            {current === "biography" ? (
              <InformationBlock>
                <h2>Who I Am</h2>
                <h5>Deicated to service, community and code</h5>
                <p>
                  My time in the military taught me two things. People come
                  first, and never give up. I come from a long line of service
                  members and the result is a dedicated, compassionate, purpose
                  driven individual with a great amount of empathy. I firmly
                  believe that a team needs to harness these things, in
                  conjunction with academics, to be productive in tech.
                </p>
                <HireButtons />
              </InformationBlock>
            ) : (
              ""
            )}
            {current === "aspirations" ? (
              <InformationBlock>
                <h2>Where I Am Going</h2>
                <h5>Merge technology with youth services </h5>
                <p>
                  I am deeply passionate about empowering at-risk youth through
                  technology education. My aspiration is to create a program
                  where I can impart coding skills, enabling these young
                  individuals to embark on a journey towards fulfilling careers
                  as developers. Creating opportunities for them to harness
                  their potential, build confidence, and pave the way for a
                  brighter future. My ultimate goal is to teach them technical
                  skills but also foster creativity, resilience, and a sense of
                  possibility that they will carry throughout their lives.
                </p>
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
        />
      </Row>
      <Footer />
    </div>

  );
}

export default About;
