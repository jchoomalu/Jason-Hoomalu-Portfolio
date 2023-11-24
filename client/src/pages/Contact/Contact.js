import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';

class HiddenFormComponent extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      // Send data to your server or external API
      const response = await fetch('/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Data sent successfully!');
        event.target.reset(); // Reset the visible form after successful submission
      } else {
        throw new Error('Failed to send data.');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }

    // Submit the hidden form for Netlify processing
    const hiddenFormData = new FormData(document.forms.hiddenForm);
    fetch('/', {
      method: 'POST',
      body: hiddenFormData,
    })
      .then(() => {
        console.log('Hidden form submitted successfully');
        // Optionally reset the hidden form after successful submission
        // document.forms.hiddenForm.reset();
      })
      .catch((error) => {
        console.error('Hidden form submission error:', error);
      });
  };

  render() {
    return (
      <Container>
        <Form
          name="contact"
          className="text-white col-12 col-md-9 mx-auto"
          netlify
          onSubmit={this.handleSubmit}
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

        {/* Hidden form for Netlify submission */}
        <Form name="hiddenForm" data-netlify="true" style={{ display: 'none' }}>
          <Form.Control type="text" name="name" />
          <Form.Control type="email" name="email" />
          <Form.Control type="tel" name="phone" />
          <Form.Control as="textarea" rows={5} name="message" />
          {/* Add other necessary fields */}
          <input type="hidden" name="form-name" value="contact" />
        </Form>
      </Container>
    );
  }
}

export default HiddenFormComponent;
