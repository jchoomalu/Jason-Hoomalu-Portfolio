import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <Form
        name="contact"
        className="text-white col-12 col-md-9 mx-auto"
        method="POST"
        data-netlify="true"
      >
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" />
        </Form.Group>

        <Row>
          <Col md="6">
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="email@example.com"
                name="email"
              />
            </Form.Group>
          </Col>

          <Col md="6">
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter a message..."
            name="message"
          />
        </Form.Group>

        <div className="text-center">
          <button
            variant="primary"
            type="submit"
            className="submit-btn my-3 w-75 p-2"
          >
            Send Message
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;
