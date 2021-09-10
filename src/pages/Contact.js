import React from "react";
import "./Contact.css";
import contact from "../images/contact.jpg";

function Contact() {
  return (
    <div className="contact-content-wrapper" id="contact-content-wrapper">
      <div className="contact-img">
        <img src={contact} alt="keyboard wth green fonts" />
      </div>
      <div className="contact-title">
        <h1>Contact Us</h1>
        <hr />
      </div>
      <form className="contact-form">
        <input type="text" placeholder="  Name" required />
        <input type="email" placeholder="  id@gmail.com" required />
        <input type="text" placeholder="  Subject" required />
        <textarea
          placeholder="  Enter your message here..."
          required  
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
