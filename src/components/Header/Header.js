import React from "react";
import Hero from "../common/Hero";
import homeImg from "../../images/homeImg.jpeg";
import Banner from "../common/Banner";
import { PrimaryBtn } from "../common/Buttons";

const Header = () => {
  return (
      <Hero img={homeImg}>
        <Banner
          greeting="Welcome to"
          title="COMO COCOA"
          text="COMO Cocoa Island is an intimate private Maldives island resort with 33 overwater suites allowing you to slip right into the turquoise lagoon to explore an exceptional house reef. Encircled with powder white sand, the carefree, understated luxury experience includes holistic wellness treatments at COMO Shambhala Retreat, South Indian-influenced cuisine and world-class diving."
        >
          <PrimaryBtn t="1rem">view Details</PrimaryBtn>
        </Banner>
      </Hero>
  );
};

export default Header;
