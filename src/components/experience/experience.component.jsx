import React, { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CustomTitle from "../custom-title/custom-title.component";
import ArrowStatement from "../arrow-statement/arrow-statement.component";

import {
  ExperienceSection,
  ExperienceBody,
  ExperienceDetails,
  CompaniesTabs,
  EmploymentHistory,
  TabButton,
  Task,
  JobTitle,
  TitleSpan,
  JobTimeline,
  JobIntro,
} from "./experience.styles";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  let experienceSection = useRef(null);
  let experienceBody = useRef(null);
  let employmentHistory1 = useRef(null);
  let employmentHistory2 = useRef(null);
  let employmentHistory3 = useRef(null);
  let employmentHistory4 = useRef(null);

  useEffect(() => {
    const experienceBodyFirst = experienceBody.children[0];
    const experienceBodySecond = experienceBodyFirst.nextSibling;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: experienceSection,
        start: "top 50%",
      },
    });

    tl.from(experienceBodyFirst, { opacity: 0, x: -200, duration: 0.4 }).from(
      experienceBodySecond,
      {
        opacity: 0,
        y: 200,
        duration: 0.8,
        ease: "Power3.easeInOut",
        stagger: 0.2,
      }
    );
  }, []);

  useEffect(() => {
    gsap.from(
      [
        employmentHistory1,
        employmentHistory2,
        employmentHistory3,
        employmentHistory4,
      ],
      { opacity: 0, ease: "Power3.easeInOut" }
    );
  }, [toggleState]);

  return (
    <ExperienceSection id="experience" ref={(el) => (experienceSection = el)}>
      <ExperienceBody ref={(el) => (experienceBody = el)}>
        <CustomTitle>My Journey</CustomTitle>
        <ExperienceDetails>
          <CompaniesTabs>
            <TabButton
              isActive={toggleState === 1 ? "active" : ""}
              onClick={() => toggleTab(1)}
            >
              TWAA
            </TabButton>
            <TabButton
              isActive={toggleState === 2 ? "active" : ""}
              onClick={() => toggleTab(2)}
            >
              Adanian Labs
            </TabButton>
            <TabButton
              isActive={toggleState === 3 ? "active" : ""}
              onClick={() => toggleTab(3)}
            >
              Anzil
            </TabButton>
            <TabButton
              isActive={toggleState === 4 ? "active" : ""}
              onClick={() => toggleTab(4)}
            >
              Rentor
            </TabButton>
          </CompaniesTabs>
          <EmploymentHistory
            isActive={toggleState === 1 ? "active-content" : ""}
            ref={(el) => (employmentHistory1 = el)}
          >
            <JobIntro>
              <JobTitle>
                Lead Software Engineer <TitleSpan>@ TWAA</TitleSpan>
              </JobTitle>
              <JobTimeline>June 2021 - Present</JobTimeline>
            </JobIntro>
            <ArrowStatement>
              <Task>
                Directing the development team in the design, development,
                coding, testing and debugging of TWAA
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>
                Developing robust, reusable and highly scalable UI components
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>
                Developing the admin dashboard (both frontend and backend)
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>Integrating third-party libraries</Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>
                Refactoring and updating the existing code base to use modern
                design approaches
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>Developing highly scalable REST APIs</Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>
                Testing, refactoring and fixing bugs or other coding issues
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>Writing technical documentation</Task>
            </ArrowStatement>
          </EmploymentHistory>
          <EmploymentHistory
            ref={(el) => (employmentHistory2 = el)}
            isActive={toggleState === 2 ? "active-content" : ""}
          >
            <JobIntro>
              <JobTitle>
                Full Stack Software Engineer{" "}
                <TitleSpan>@ Adanian Labs Africa</TitleSpan>
              </JobTitle>
              <JobTimeline>June 2021 - Present</JobTimeline>
            </JobIntro>
            <ArrowStatement>
              <Task>
                Adanian Labs Africa is a venture building studio with a mission
                to build tech-powered impact-driven startups across Africa
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>
                {" "}
                I work at TWAA, one of the startups under incubation at Adanian
                Labs
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>
                I also offer consultancy services as a Full Stack Software
                Engineer to other startups at Adanian Labs Africa
              </Task>
            </ArrowStatement>
          </EmploymentHistory>
          <EmploymentHistory
            ref={(el) => (employmentHistory3 = el)}
            isActive={toggleState === 3 ? "active-content" : ""}
          >
            <JobIntro>
              <JobTitle>
                Full Stack Web Developer{" "}
                <TitleSpan>@ Anzil Software Limited</TitleSpan>
              </JobTitle>
              <JobTimeline>Oct 2019 - May 2021</JobTimeline>
            </JobIntro>
            <ArrowStatement>
              <Task>
                Participating in the design and creation of highly scalable
                admin dashboards
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>Assessing UX and UI designs for technical feasibility</Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>
                Designing and developing REST APIs using NodeJS, Django and
                Flask
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>
                Creating dashboard UIs using ReactJS + Styled Components, Redux
                for state management and Axios for integrating REST APIs
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>
                Defining the structure and components for the projects, making
                sure they are reusable
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>
                Standardizing all output with a new responsive, mobile-first
                approach and strategy
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>
                Testing, refactoring and fixing bugs or other coding issues
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>Writing technical documentation</Task>
            </ArrowStatement>
          </EmploymentHistory>
          <EmploymentHistory
            ref={(el) => (employmentHistory4 = el)}
            isActive={toggleState === 4 ? "active-content" : ""}
          >
            <JobIntro>
              <JobTitle>
                Backend/API Developer <TitleSpan>@ Rentor Group</TitleSpan>
              </JobTitle>
              <JobTimeline>April 2019 - Sept 2019</JobTimeline>
            </JobIntro>
            <ArrowStatement>
              <Task>
                Member of a team that was tasked with developing a RESTful API
                backend
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>Integrated several microservices into this backend</Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>
                Testing, refactoring and fixing bugs or other coding issues{" "}
              </Task>
            </ArrowStatement>
            <ArrowStatement>
              <Task>Writing technical documentation</Task>
            </ArrowStatement>
          </EmploymentHistory>
        </ExperienceDetails>
      </ExperienceBody>
    </ExperienceSection>
  );
};

export default Experience;
