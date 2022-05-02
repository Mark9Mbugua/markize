import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectImage1 from "../../assets/TWAA.png";
import ProjectImage2 from "../../assets/beach-resort.jpg";
import ProjectImage4 from "../../assets/Anzil.png";
import ExternalLinkSrc from "../../assets/external-link.svg";

import CustomTitle from "../custom-title/custom-title.component";

import {
  PortfolioSection,
  PortfolioBody,
  PortfolioDetailsBody,
  ProjectImageContainer,
  ProjectImageSrc,
  ProjectDetails,
  ProjectTypeContainer,
  ProjectType,
  ProjectTitle,
  ProjectDescriptionContainer,
  Overlay,
  TechStackContainer,
  TechStack,
  ExternalLinkContainer,
  ExternalLink,
  ExternalLinkSvg,
  ProjectTypeInvertedContainer,
  ProjectDescriptionInvertedContainer,
  ExternalLinkInverted,
  ExternalImageLink,
} from "../portfolio/portfolio.styles";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  let portfolioSection = useRef(null);
  let portfolioBody = useRef(null);

  useEffect(() => {
    const portfolioBodyFirst = portfolioBody.children[0];
    const portfolioBodySecond = portfolioBodyFirst.nextSibling;
    const portfolioBodyThird = portfolioBodySecond.nextSibling;
    const portfolioBodyFourth = portfolioBodyThird.nextSibling;
    const portfolioBodyFifth = portfolioBodyFourth.nextSibling;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioSection,
        start: "top 50%",
      },
    });

    tl.from(portfolioBodyFirst, {
      opacity: 0,
      x: -200,
      duration: 0.4,
      stagger: 1.0,
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioBodySecond,
        start: "top 50%",
      },
    });

    tl2.from(portfolioBodySecond, {
      opacity: 0,
      y: -60,
      duration: 0.8,
      ease: "Power3.easeInOut",
      stagger: 1.0,
    });

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioBodyThird,
        start: "top 50%",
      },
    });

    tl3.from(portfolioBodyThird, {
      opacity: 0,
      y: -60,
      duration: 0.8,
      ease: "Power3.easeInOut",
      stagger: 1.0,
    });

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioBodyFourth,
        start: "top 50%",
      },
    });

    tl4.from(portfolioBodyFourth, {
      opacity: 0,
      y: -60,
      duration: 0.8,
      ease: "Power3.easeInOut",
      stagger: 1.0,
    });

    let tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: portfolioBodyFifth,
        start: "top 50%",
      },
    });

    tl5.from(portfolioBodyFifth, {
      opacity: 0,
      y: -60,
      duration: 0.8,
      ease: "Power3.easeInOut",
      stagger: 1.0,
    });
  }, []);
  return (
    <PortfolioSection id="portfolio" ref={(el) => (portfolioSection = el)}>
      <PortfolioBody ref={(el) => (portfolioBody = el)}>
        <CustomTitle>Portfolio</CustomTitle>
        <PortfolioDetailsBody>
          <ProjectDetails>
            <ProjectTypeInvertedContainer>
              <ProjectType>Client Project</ProjectType>
            </ProjectTypeInvertedContainer>
            <ProjectTypeInvertedContainer>
              <ProjectTitle>TWAA</ProjectTitle>
            </ProjectTypeInvertedContainer>
            <ProjectDescriptionInvertedContainer>
              <p>
                TWAA is a diverse, inclusive and safe digital space for women to
                build and grow communities, connect with female mentors, create
                and share content and access tools for personal and professional
                development.
              </p>
            </ProjectDescriptionInvertedContainer>
            <TechStackContainer>
              <TechStack>ReactJS</TechStack>
              <TechStack>Sass</TechStack>
              <TechStack>Redux</TechStack>
              <TechStack>Node.js</TechStack>
              <TechStack>Express</TechStack>
              <TechStack>Nginx</TechStack>
            </TechStackContainer>
            <ExternalLinkContainer>
              <ExternalLinkInverted href="https://twaa.io/" target="_blank">
                <ExternalLinkSvg src={ExternalLinkSrc} />
              </ExternalLinkInverted>
            </ExternalLinkContainer>
          </ProjectDetails>
          <ExternalImageLink href="https://twaa.io/" target="_blank">
            <ProjectImageContainer>
              <ProjectImageSrc src={ProjectImage1} />
              <Overlay />
            </ProjectImageContainer>
          </ExternalImageLink>
        </PortfolioDetailsBody>
        {/* <PortfolioDetailsBody>
          <ProjectDetails>
            <ProjectTypeInvertedContainer>
              <ProjectType>Client Project</ProjectType>
            </ProjectTypeInvertedContainer>
            <ProjectTypeInvertedContainer>
              <ProjectTitle>Pennylane Apartments</ProjectTitle>
            </ProjectTypeInvertedContainer>
            <ProjectDescriptionInvertedContainer>
              <p>
                Pennylane Apartments located at Banana Hill in Kiambu County,
                Kenya.
              </p>
            </ProjectDescriptionInvertedContainer>
            <TechStackContainer>
              <TechStack>ReactJS</TechStack>
              <TechStack>CSS</TechStack>
              <TechStack>GSAP</TechStack>
            </TechStackContainer>
            <ExternalLinkContainer>
              <ExternalLinkInverted
                href="https://pennylane.netlify.app/"
                target="_blank"
              >
                <ExternalLinkSvg src={ExternalLinkSrc} />
              </ExternalLinkInverted>
            </ExternalLinkContainer>
          </ProjectDetails>
          <ExternalImageLink
            href="https://pennylane.netlify.app/"
            target="_blank"
          >
            <ProjectImageContainer>
              <ProjectImageSrc src={ProjectImage3} />
              <Overlay />
            </ProjectImageContainer>
          </ExternalImageLink>
        </PortfolioDetailsBody> */}
        <PortfolioDetailsBody>
          <ExternalImageLink
            href="https://www.anzilsystems.com/"
            target="_blank"
          >
            <ProjectImageContainer>
              <ProjectImageSrc src={ProjectImage4} />
              <Overlay />
            </ProjectImageContainer>
          </ExternalImageLink>
          <ProjectDetails>
            <ProjectTypeContainer>
              <ProjectType>Client Project</ProjectType>
            </ProjectTypeContainer>
            <ProjectTypeContainer>
              <ProjectTitle>Anzil Software Limited</ProjectTitle>
            </ProjectTypeContainer>
            <ProjectDescriptionContainer>
              <p>
                Anzil Software Ltd is a Software Company based in Westlands,
                Nairobi, Kenya that specializes in building Enterprise Web
                Applications
              </p>
            </ProjectDescriptionContainer>
            <TechStackContainer>
              <TechStack>ReactJS</TechStack>
              <TechStack>Redux</TechStack>
              <TechStack>Styled-Components</TechStack>
              <TechStack>MongoDB</TechStack>
              <TechStack>Node.js & Express</TechStack>
            </TechStackContainer>
            <ExternalLinkContainer>
              <ExternalLink
                href="https://www.anzilsystems.com/"
                target="_blank"
              >
                <ExternalLinkSvg src={ExternalLinkSrc} />
              </ExternalLink>
            </ExternalLinkContainer>
          </ProjectDetails>
        </PortfolioDetailsBody>
        <PortfolioDetailsBody>
          <ProjectDetails>
            <ProjectTypeInvertedContainer>
              <ProjectType>Practice Project</ProjectType>
            </ProjectTypeInvertedContainer>
            <ProjectTypeInvertedContainer>
              <ProjectTitle>Beach Resort</ProjectTitle>
            </ProjectTypeInvertedContainer>
            <ProjectDescriptionInvertedContainer>
              <p>
                A practice project meant to test and level up my Context API,
                Contentful, CSS, basic searching and filtering skills.
              </p>
            </ProjectDescriptionInvertedContainer>
            <TechStackContainer>
              <TechStack>ReactJS</TechStack>
              <TechStack>Context API</TechStack>
              <TechStack>CSS</TechStack>
              <TechStack>Contentful</TechStack>
            </TechStackContainer>
            <ExternalLinkContainer>
              <ExternalLinkInverted
                href="https://react-beach-resort-rooms.netlify.com/"
                target="_blank"
              >
                <ExternalLinkSvg src={ExternalLinkSrc} />
              </ExternalLinkInverted>
            </ExternalLinkContainer>
          </ProjectDetails>
          <ExternalImageLink
            href="https://react-beach-resort-rooms.netlify.com/"
            target="_blank"
          >
            <ProjectImageContainer>
              <ProjectImageSrc src={ProjectImage2} />
              <Overlay />
            </ProjectImageContainer>
          </ExternalImageLink>
        </PortfolioDetailsBody>
      </PortfolioBody>
    </PortfolioSection>
  );
};

export default Portfolio;
