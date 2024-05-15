import React from "react";
import { MyFooter } from "./Footer.styled";
const linkedin = require("../../images/footer/linkedin.png");
const stackOverflow = require("../../images/footer/so.png");
const github = require("../../images/footer/github.png");
const codeCamp = require("../../images/footer/codecamp.jpeg");

const Footer = () => {
  return (
    <MyFooter>
      <a
        href="https://www.linkedin.com/in/vaheed-akhtar-97a761a4/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="LI-icon" />
      </a>
      <a
        href="https://stackoverflow.com/users/6544460/vahid-akhtar?tab=profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={stackOverflow} alt="so-icon" />
      </a>
      <a
        href="https://github.com/akhtarvahid"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="gh-icon" />
      </a>
      <a
        href="https://www.freecodecamp.org/akhtarvahid"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={codeCamp} alt="fcc-icon" />
      </a>
    </MyFooter>
  );
};

export default Footer;
