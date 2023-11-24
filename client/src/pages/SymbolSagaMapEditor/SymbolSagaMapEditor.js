import React, { useEffect, useState } from "react";
import { Image, Row } from "react-bootstrap";
import jason from "../../assets/images/jason_hoomalu.png";
import InnerNav from "../../components/InnerNav/InnerNav";
import InformationBlock from "../../components/InformationBlock";
import HireButtons from "../../components/HireButtons";
import Footer from "../../components/Footer/Footer";
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
    "https://main--splendorous-pudding-738ee6.netlify.app/map.html";
  const ssPlay = "https://main--splendorous-pudding-738ee6.netlify.app/";

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
        <div className="col-12 col-md-7 offset-md-1 p-3 about-content-wrapper">
          <div className={`about-content ${current === "" ? "hide" : ""}`}>
            {current === "overview" ? (
              <InformationBlock>
                <h2>Symbol Saga Map Editor</h2>
                <h5>Create and edit tile based maps</h5>
                <p>In collaboration with Sebastian Oliveres-Coster</p>
                <p>
                  This project was made to simplify the map building process for
                  the tile based RPG{" "}
                  <a href={ssPlay} target="_blank" rel="noopener noreferrer">
                    Symbol Saga
                  </a>{" "}
                  The editor uses math and array methods to create
                  multi-dimensional arrays of tile ID's that can be used
                  directly in the Symbol Saga code base. Editor can also import
                  existing maps for quick and easy edits, as well as lay a tile
                  base as a quick start feature for new maps.
                </p>
                <a href={ssMapPlay} target="_blank" rel="noopener noreferrer">
                  Symbol Saga Map Editor
                </a>
                <HireButtons />
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
                  This development tool was crucial in building the Symbol Saga
                  RPG. Simply designed with HTML, CSS, JavaScript, and jQuery
                  the editor follows the object oriented design principals by
                  having each number in an array correspond to a specific tile
                  object in the code base.
                </p>
                <a href={ssMapPlay} target="_blank" rel="noopener noreferrer">
                  Symbol Saga Map Editor
                </a>
                <HireButtons />
              </InformationBlock>
            ) : (
              ""
            )}
            {current === "project" ? (
              <InformationBlock>
                <h2>Symbol Saga Map Editor</h2>
                <h5>Create and edit tile based maps </h5>
                <p>In collaboration with Sebastian Oliveres-Coster</p>
                <p></p>
                <a href={ssMapPlay} target="_blank" rel="noopener noreferrer">
                  Symbol Saga Map Editor
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
        />
      </Row>
    </div>
    <Footer />
    </>
  );
}

export default SymbolSagaMapEditor;
