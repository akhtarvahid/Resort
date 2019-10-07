import React from 'react';
import styled from 'styled-components';
import Section from '../common/Section';
import Title from '../common/Title';
import aboutImg from '../../images/aboutBcg.jpeg';
import { PrimaryBtn } from '../common/Buttons';
import { setRem, setBorder, setColor, setLetterSpacing, media } from '../../styles';

const About = () => {
    return (
        <Section>
         <AboutCenter>
          <div className="about-img">
            <img src={aboutImg} alt="about us" />  
          </div>
          <div className="about-info">
           <Title title="about us" />
           <p>From its personalised service and sophisticated cuisine to its distinctive design, authentic culture and calming spa, our Maldives luxury resort works hard to tailor the experience to your needs. We can orchestrate customised cruises to neighbouring islands and beaches; plan private dinners at secluded locations; arrange yoga, diving or snorkelling; and create adventures for families travelling together.</p>
           <PrimaryBtn>read more</PrimaryBtn>
          </div>
         </AboutCenter>    
        </Section>
    );
};

const AboutCenter = styled.div`
.about-img, .about-info {
    padding: ${setRem(30)}
}
.about-img {
    img {
        width: 100%;
        display: block;
        ${setBorder({width: setRem(6), color: setColor.primaryColor})}
    }
}
.about-info {
    p {
        ${setLetterSpacing(3)};
    }
}
width: 90vw;
margin: 0 auto;
${media.desktop`
.about-img, .about-info {
    padding: ${setRem(0)}
}
width: 100vw;
max-width: 1170px;
display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: ${setRem(32)};
.about-img, .about-info {
    align-self: center;
}
.about-info {
    p{
        width: 80%;
    }
}
`}
`

export default About;