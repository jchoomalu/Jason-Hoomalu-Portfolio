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
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  return (
    <div class="container">
      <form
        name="contact"
        class="text-white col-12 col-md-9 mx-auto"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div class="form-group" id="name">
          <label for="name">Name</label>
          <input
            class="form-control my-1"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div class="row">
          <div class="col my-1" md="6">
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

          <div class="col my-1" md="6">
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

        <div class="form-group my-1" id="message">
          <label for="message">Message</label>
          <textarea
            class="form-control"
            rows="5"
            name="message"
            placeholder="Enter a message..."
          ></textarea>
        </div>

        <div class="text-center">
          <button type="submit" className="submit-btn my-3 w-75 p-2">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
