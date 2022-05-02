import React, { useEffect, useRef } from "react";

import gsap from "gsap";

import CustomButton from "../custom-button/custom-button.component";

import {
  LandingSection,
  LandingBody,
  HeadingOne,
  HeadingTwo,
  IntroDetails,
  MyName,
  FavStack,
  LandingButtonContainer,
  ContactLink,
} from "./landing.styles";

const Landing = () => {
  let myName = useRef(null);
  let headingOne = useRef(null);
  let headingTwo = useRef(null);
  let introDetailsOne = useRef(null);
  let introDetailsTwo = useRef(null);
  let introDetailsThree = useRef(null);
  let landingButton = useRef(null);

  useEffect(() => {
    gsap.from(
      [
        myName,
        headingOne,
        headingTwo,
        introDetailsOne,
        introDetailsTwo,
        introDetailsThree,
        landingButton,
      ],
      { delay: 0.6, duration: 0.4, opacity: 0, y: -20, stagger: 0.1 }
    );
  }, []);

  return (
    <LandingSection id="landing">
      <LandingBody>
        <MyName ref={(el) => (myName = el)}>Hi, my name is</MyName>
        <HeadingOne ref={(el) => (headingOne = el)}>Mark Mbugua.</HeadingOne>
        <HeadingTwo ref={(el) => (headingTwo = el)}>
          I build things for the web.
        </HeadingTwo>
        <IntroDetails ref={(el) => (introDetailsOne = el)}>
          I am a Software Engineer and an Internet Enterpreneur
        </IntroDetails>
        <IntroDetails ref={(el) => (introDetailsTwo = el)}>
          I am a creator and a consultant
        </IntroDetails>
        <IntroDetails ref={(el) => (introDetailsThree = el)}>
          <FavStack>ReactJS, Node.js & Express</FavStack> are my main weapons of
          mass creation
        </IntroDetails>
        <LandingButtonContainer ref={(el) => (landingButton = el)}>
          <ContactLink
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
          >
            <CustomButton>Get in Touch</CustomButton>
          </ContactLink>
        </LandingButtonContainer>
      </LandingBody>
    </LandingSection>
  );
};

export default Landing;
