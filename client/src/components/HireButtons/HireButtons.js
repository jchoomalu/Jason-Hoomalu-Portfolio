import React, {useState, useRef} from "react";
import { Nav, Navbar, Overlay  } from "react-bootstrap";
import "./HireButtons.css"

function HireButtons() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  
  return (
    <Navbar>
    <Nav>
    <Overlay target={target.current} show={show} placement="left">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
          >
            <Nav.Link className="p-2 hire-btn">Download</Nav.Link>
            <Nav.Link className="p-2 hire-btn">View Online</Nav.Link>
          </div>
        )}
      </Overlay>

      <Nav.Link className="p-2 hire-btn text-white" ref={target} onClick={() => setShow(!show)}>Resume</Nav.Link>
      <Nav.Link href="/contact" className="p-2 hire-btn">Hire Me</Nav.Link>
    </Nav>
    </Navbar>
  );
}

export default HireButtons;
