import React from "react";
import contact from "../images/contact.jpg";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactWrapper className="div">
      <div className="contact-img">
        <img src={contact} alt="keyboard with green fonts" />
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
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  font-size: 1.2rem;
  row-gap: 3rem;
  width: auto;

  img {
    height: 45vh;
    width: 100%;
    max-width: 100%;
    border-bottom: 0.2rem solid grey;
  }
  .contact-title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }
  .contact-form input {
    height: 8vh;
  }
  .contact-form textarea {
    height: 25vh;
  }
  .contact-form textarea::placeholder {
    padding-top: 1.3rem;
  }
  .contact-form button {
    font-size: 1.2rem;
    color: white;
    background-color: #098a70;
    height: 8vh;
    margin-bottom: 5rem;
  }
  .contact-form input,
  .contact-form textarea,
  .contact-form button {
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3), 0 0 35px rgba(0, 0, 0, 0.1) inset;
    border: none;
    border-radius: 0.8rem;
    width: 75vw;
  }
  .contact-form input:focus,
  .contact-form textarea:focus,
  .contact-form button:focus {
    outline: none;
    box-shadow: 0 0px 8px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 0, 0, 0.1) inset;
  }

  .contact-form button:hover {
    cursor: pointer;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1), 0 0 35px rgba(0, 0, 0, 0.3) inset;
  }
`;
