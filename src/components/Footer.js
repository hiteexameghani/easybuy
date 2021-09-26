import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FooterWrapper className="footer">
      <div>© 2021 EasyBuy</div>
      <Link to="https://github.com/">
        <FaGithub />
      </Link>
      <Link to="https://www.linkedin.com/">
        <FaLinkedin />
      </Link>
      <Link to="https://www.facebook.com/">
        <FaFacebook />
      </Link>
      <Link to="https://twitter.com/">
        <FaTwitter />
      </Link>
      <Link to="https://www.instagram.com/">
        <FaInstagram />
      </Link>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background-color: #6cc2b2;
  color: white;
  box-shadow: 0 0px 1px rgba(0, 0, 0.5, 0.1), 0 5px 4px rgba(0, 0, 0, 0.3) inset;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 12vh;

  a {
    font-size: 1.2rem;
    color: white;
    display: inline-block;
  }
  a:hover {
    color: var(--theme-color);
  }
  div:hover {
    cursor: text;
    color: white;
  }
`;
