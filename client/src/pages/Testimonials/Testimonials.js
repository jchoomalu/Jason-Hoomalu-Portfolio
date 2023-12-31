import React, { useState } from "react";
import {
  Image,
  Row,
  Container,
  Collapse,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import mikayla from "../../assets/images/mikayla_munn.png";
import linkedIn from "../../assets/images/linkedIn.png";
import "./Testimonials.css";

function Testimonials() {
  const [open, setOpen] = useState(false);

  const tooltip = (
    <Tooltip id="visitTooltip">Visit Mikayla on LinkedIn</Tooltip>
  );

  return (
    <>
      <Row className="about-container t-container">
        <Container className="image-container col-10 col-md-5 offset-md-1 mx-auto my-3">
          <OverlayTrigger placement="top" overlay={tooltip}>
            <div className="flip-image">
              <a
                href="https://www.linkedin.com/in/mikaylamunn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="image-card">
                  <Image
                    src={mikayla}
                    alt="linkedIn profile preview mikayla munn"
                    className="front-image t-image"
                  />
                  <Image
                    src={linkedIn}
                    alt="LinkedIn 3d graphic"
                    className="back-image t-image"
                  />
                </div>
              </a>
            </div>
          </OverlayTrigger>
        </Container>
        <Container className="text-white col-10 col-md-6 mx-auto">
          <h3>Mikayla Munn - MERN Instructor</h3>
          <div>
            <blockquote>
              <span>"</span>I have had the pleasure of witnessing Jason's remarkable
              proficiency and resourcefulness within the MERN stack. He
              showcases an exceptional understanding and skill in navigating the
              development process, particularly in proficiently implementing
              CRUD operations for MERN applications...
            </blockquote>
            <Collapse in={open}>
              <div id="collapse-text">
                <blockquote>
                  During challenging moments, Jason exhibits admirable
                  resilience by effectively utilizing available resources and
                  persistently debugging until a satisfactory resolution is
                  achieved. One of Jason's standout qualities is his commitment
                  to honesty. Whenever faced with uncertainty, he demonstrates
                  conscientiousness by actively seeking clarification. This
                  approach ensures a comprehensive understanding before applying
                  newfound knowledge.
                </blockquote>
                <blockquote>
                  Jason's proactive attitude towards learning is truly
                  inspiring. He fearlessly embraces new knowledge and willingly
                  goes above and beyond to not just meet but surpass all project
                  requirements. His dedication and proactive approach make him a
                  standout learner and contributor.<span>&rdquo;</span>
                </blockquote>
              </div>
            </Collapse>
            <p
              onClick={() => setOpen(!open)}
              className="collapse-btn"
              aria-controls="collapse-text"
              aria-expanded={open}
              style={{ cursor: "pointer" }}
            >
              {open ? "...read less" : "...read full endorsement"}
            </p>
          </div>
        </Container>
      </Row>
    </>
  );
}

export default Testimonials;
