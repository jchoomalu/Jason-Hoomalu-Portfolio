import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <form
        name="contact v1"
        netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1" />

        <div>
          <label>First Name
            <input type="text" name="first-name"></input>
          </label>
        </div>

        <div>
          <label>Email
            <input type="email" name="email"></input>
          </label>
        </div>

        <div>
          <label>Message
            <textarea name="message"></textarea>
          </label>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </>
  );
};

export default Contact;
