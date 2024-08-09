import React, { useState } from "react";
import Section from "../common/Section";
import Title from "../common/Title";
import aboutImg from "../../images/aboutBcg.jpeg";
import { PrimaryBtn } from "../common/Buttons";
import { AboutCenter } from "./About.styled";
import { TooltipBox, TooltipCard, TooltipText } from "../common/Tooltip";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about us" />
        </div>
        <div className="about-info">
          <Title title="about us" />
          <p>
            From its personalised service and sophisticated cuisine to its
            distinctive design, authentic culture and calming spa, our Maldives
            luxury resort works hard to tailor the experience to your needs. We
            can orchestrate customised cruises to neighbouring islands and
            beaches; plan private dinners at secluded locations; arrange yoga,
            diving or snorkelling; and create adventures for families travelling
            together.
          </p>

          <TooltipCard>
            <TooltipText>
              <PrimaryBtn onMouseEnter={() => setShow(true)}>
                read more
              </PrimaryBtn>
            </TooltipText>
            <TooltipBox>
              <p>{show ? "Coming soon" : "Read more..."}</p>
            </TooltipBox>
          </TooltipCard>
        </div>
      </AboutCenter>
    </Section>
  );
};

export default About;
