import React from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <Form name="contact" className="text-white col-12 col-md-9 mx-auto" netlify>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="my-2"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Row>
          <Col className="my-2" md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="email@example.com"
              />
            </Form.Group>
          </Col>
          <Col className="my-2" md={6}>
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="my-2" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            placeholder="Enter a message..."
          />
        </Form.Group>
        <div className="text-center ">
          <button type="submit" className="submit-btn my-3 w-75 p-2">
            Send Message
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;
