import React, { useEffect, useState } from "react";
import { Image, Row, Container } from "react-bootstrap";
import jason from "../../assets/images/jason_hoomalu.png";
import InnerNav from "../../components/InnerNav/InnerNav";
import InformationBlock from "../../components/InformationBlock";
import meDemo from "../../assets/images/mapEditorDemo.mov";
import me1 from "../../assets/images/me1.png"
import me2 from "../../assets/images/me2.png"
import me3 from "../../assets/images/me3.png"
import me4 from "../../assets/images/me4.png"
import "./SymbolSagaMapEditor.css";

function SymbolSagaMapEditor() {
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

  const ssMapPlay =
    "https://symbol-saga.netlify.app/map.html";

  return (
    <>
      <div>
        <Row className="about-container mx-auto">
          <InnerNav
            setCurrent={handleContentChange}
            page="ssmapeditor"
            linkOne="Overview"
            linkTwo="Technology"
            linkThree="Project"
          />
          <div className="col-12 col-md-7 offset-md-1 p-3 about-content-wrapper mx-auto">
            <div className={`about-content ${current === "" ? "hide" : ""}`}>
              {current === "overview" ? (
                <InformationBlock>
                  <h2>Symbol Saga Map Editor</h2>
                  <h5>Create and edit tile based maps</h5>
                  <p>In collaboration with Sebastian Oliveres-Coster</p>
                  <p>
                    This project was made to simplify the map building process
                    for the tile based RPG Symbol Saga and other tile based
                    games. The editor uses math and array methods to create
                    multi-dimensional arrays of tile ID's that can be used
                    directly in the Symbol Saga code base. Editor can also
                    import existing maps for quick and easy edits, as well as
                    lay a tile base as a quick start feature for new maps.
                  </p>
                  <a href={ssMapPlay} target="_blank" rel="noopener noreferrer">
                    Symbol Saga Map Editor
                  </a>
                </InformationBlock>
              ) : (
                ""
              )}
              {current === "technology" ? (
                <InformationBlock>
                  <h2>Symbol Saga Map Editor</h2>
                  <h5>Create and edit tile based maps</h5>
                  <p>In collaboration with Sebastian Oliveres-Coster</p>
                  <p>
                    This development tool was crucial in building the Symbol
                    Saga RPG. Simply designed with HTML, CSS, JavaScript, and
                    jQuery. The editor follows object oriented design principals
                    by taking advantage of classes, prototypes, and
                    encapsulation.
                  </p>
                  <a href={ssMapPlay} target="_blank" rel="noopener noreferrer">
                    Symbol Saga Map Editor
                  </a>
                </InformationBlock>
              ) : (
                ""
              )}
              {current === "project" ? (
                <InformationBlock>
                  <Container>
                      <video
                      className="mx-auto"
                        autoPlay
                        controls
                      >
                        <source src={meDemo} type="video/mp4"></source>
                      </video>
                  </Container>
                </InformationBlock>
              ) : (
                ""
              )}
            </div>
          </div>
          {current === "project" ? (
            <div className="thumbnail-container col-12 mx-auto">
                <Container className="col-6">
              <Image className="thumbnail-image thumbnail-image-left" src={me1} />
              <Image className="thumbnail-image thumbnail-image-left" src={me2} />
              </Container>
              <Container className="col-6">
              <Image className="thumbnail-image thumbnail-image-right" src={me3} />
              <Image className="thumbnail-image thumbnail-image-right" src={me4} />
              </Container>
            </div>
          ) : (
            <Image
              className="about-image col-4 col-xl-3 offset-xl-1 d-none d-md-block"
              src={jason}
            />
          )}
        </Row>
      </div>
    </>
  );
}

export default SymbolSagaMapEditor;
