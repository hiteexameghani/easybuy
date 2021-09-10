import React from "react";
import {FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

export default function Footer() {
    return (
      <FooterWrapper className="footer">
        <div>© 2021 EasyBuy</div>
        <a href="https://github.com/"><FaGithub/></a>
        <a href="https://www.linkedin.com/"><FaLinkedin/> </a>
        <a href="https://www.facebook.com/"> <FaFacebook/> </a>
        <a href="https://twitter.com/"> <FaTwitter/> </a>
        <a href="https://www.instagram.com/"> <FaInstagram/></a>
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
  /*position:sticky;
  bottom:0;*/
}
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