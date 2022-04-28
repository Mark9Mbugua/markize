import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CustomTitle from "../custom-title/custom-title.component";
import ArrowStatement from "../arrow-statement/arrow-statement.component";
import MyImage from "../my-image/my-image.component";

import {
  AboutSection,
  AboutBody,
  DetailsContainer,
  DetailsBody,
  MyDetails,
  TechStack,
} from "./about.styles";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  let aboutSection = useRef(null);
  let aboutBody = useRef(null);

  useEffect(() => {
    const aboutBodyFirst = aboutBody.children[0];
    const aboutBodySecond = aboutBodyFirst.nextSibling;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSection,
        start: "top 50%",
      },
    });

    tl.from(aboutBodyFirst, { opacity: 0, x: -200, duration: 0.4 }).from(
      aboutBodySecond,
      {
        opacity: 0,
        y: 200,
        duration: 0.8,
        ease: "Power3.easeInOut",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <AboutSection id="about" ref={(el) => (aboutSection = el)}>
      <AboutBody ref={(el) => (aboutBody = el)}>
        <CustomTitle>About Me</CustomTitle>
        <DetailsContainer>
          <DetailsBody>
            <MyDetails>
              Hello! I'm Mark, a software engineer based in Nairobi, Kenya.
            </MyDetails>
            <MyDetails>
              I enjoy creating things that live on the internet, whether that be
              websites, applications, or anything in between. My goal is to
              always build products that provide pixel-perfect, performant
              experiences.
            </MyDetails>
            <MyDetails>
              Here are a few technologies I've been working with recently:
            </MyDetails>
            <TechStack>
              <ArrowStatement>
                <MyDetails>JavaScript (ES6+)</MyDetails>
              </ArrowStatement>
              <ArrowStatement>
                <MyDetails>React</MyDetails>
              </ArrowStatement>
              <ArrowStatement>
                <MyDetails>HTML & (S)CSS</MyDetails>
              </ArrowStatement>
              <ArrowStatement>
                <MyDetails>Python</MyDetails>
              </ArrowStatement>
              <ArrowStatement>
                <MyDetails>Django</MyDetails>
              </ArrowStatement>
              <ArrowStatement>
                <MyDetails>Node.js</MyDetails>
              </ArrowStatement>
              <ArrowStatement>
                <MyDetails>AWS</MyDetails>
              </ArrowStatement>
            </TechStack>
          </DetailsBody>
          <MyImage />
        </DetailsContainer>
      </AboutBody>
    </AboutSection>
  );
};

export default About;
