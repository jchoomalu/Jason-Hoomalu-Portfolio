import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
  );
};

export default Contact;

{/* <div class="container">
      <form
        name="contact"
        class="text-white col-12 col-md-9 mx-auto"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div class="form-group" id="name">
          <label for="name">Name</label>
          <input
            class="form-control my-2"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div class="row">
          <div class="col my-2" md="6">
            <div class="form-group" id="email">
              <label for="email">Email address</label>
              <input
                class="form-control"
                type="email"
                name="email"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div class="col my-2" md="6">
            <div class="form-group" id="phone">
              <label for="phone">Phone Number</label>
              <input
                class="form-control"
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        <div class="form-group my-2" id="message">
          <label for="message">Message</label>
          <textarea
            class="form-control"
            rows="5"
            name="message"
            placeholder="Enter a message..."
          ></textarea>
        </div>

        <div class="text-center">
          <button type="submit" class="submit-btn my-3 w-75 p-2">
            Send Message
          </button>
        </div>
      </form>
    </div> */}
