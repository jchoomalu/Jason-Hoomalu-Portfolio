import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.target;
    const formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert("Message sent. I look forward to speaking with you.");
      })

      .catch((error) => {
        alert("Error sending message.");
      });
  };

  return (
    <>
      <div className="container mb-5">
        <form
          name="contact"
          className="text-white col-12 col-md-9 mx-auto"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group" id="name">
            <label htmlFor="name">Name</label>
            <input
              className="form-control my-1"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>

          <div className="row">
            <div className="col my-1" md="6">
              <div className="form-group" id="email">
                <label htmlFor="email">Email address</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>

            <div className="col my-1" md="6">
              <div className="form-group" id="phone">
                <label htmlFor="phone">Phone Number</label>
                <input
                  className="form-control"
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (optional)"
                />
              </div>
            </div>
          </div>

          <div className="form-group my-1" id="message">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              rows="5"
              name="message"
              placeholder="Enter a message..."
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="submit-btn mb-5 w-75 p-2">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
