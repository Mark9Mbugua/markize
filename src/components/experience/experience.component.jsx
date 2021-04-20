import React, { useEffect, useRef,useState } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomTitle from '../custom-title/custom-title.component';
import ArrowStatement from '../arrow-statement/arrow-statement.component';

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
    JobIntro
} from './experience.styles';

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

    useEffect(() =>{
        const experienceBodyFirst = experienceBody.children[0];
        const experienceBodySecond = experienceBodyFirst.nextSibling;

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: experienceSection,
                start: 'top 50%',

            }
        });

        tl
        .from(experienceBodyFirst, {opacity: 0, x: -200, duration: .4})
        .from(experienceBodySecond, {opacity: 0, y: 200, duration: .8, ease: 'Power3.easeInOut', stagger: 0.2});
    }, []);


    useEffect(() =>{
        gsap.from([ employmentHistory1, employmentHistory2, employmentHistory3, employmentHistory4],
            {opacity: 0, duration: .8, ease: 'Power3.easeInOut'})
    }, [toggleState]);

    return (
        <ExperienceSection 
            id='experience'
            ref={el => experienceSection = el}   
        >
            <ExperienceBody ref={el => experienceBody = el}>
                <CustomTitle>My Journey</CustomTitle>
                <ExperienceDetails>
                    <CompaniesTabs>
                        <TabButton
                            isActive={toggleState === 1 ? 'active' : ''} 
                            onClick={() => toggleTab(1)}
                        >
                            Dealie
                        </TabButton>
                        <TabButton
                        isActive={toggleState === 2 ? 'active' : ''}
                            onClick={() => toggleTab(2)}
                        >
                            BHAG
                        </TabButton>
                        <TabButton
                            isActive={toggleState === 3 ? 'active' : ''}
                            onClick={() => toggleTab(3)}
                        >
                            Anzil
                        </TabButton>
                        <TabButton
                            isActive={toggleState === 4 ? 'active' : ''}
                            onClick={() => toggleTab(4)}
                        >
                            Rentor
                        </TabButton>
                    </CompaniesTabs>
                    <EmploymentHistory 
                        isActive={toggleState === 1 ? 'active-content' : ''}
                        ref={el =>  employmentHistory1 = el}
                    >
                        <JobIntro>
                            <JobTitle>
                                Full Stack Web Developer <TitleSpan>@ Dealie</TitleSpan>
                            </JobTitle>
                            <JobTimeline>
                                Jan 2021 - Present
                            </JobTimeline>
                        </JobIntro>
                        <ArrowStatement>
                            <Task> Designing and developing RESTful APIs using Django Rest Framework</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>
                                Creating the UI using ReactJS + Styled Components, Redux for state
                                management and Axios for integrating RESTful APIs
                            </Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Defining the structure and components for the project, making sure they are reusable</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Standardizing all output with a new responsive, mobile-first approach and strategy</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Testing, refactoring and fixing bugs or other coding issues</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Constantly optimizing the application to achieve a seamless user experience</Task>
                        </ArrowStatement>
                    </EmploymentHistory>
                    <EmploymentHistory
                        ref={el =>  employmentHistory2 = el} 
                        isActive={toggleState === 2 ? 'active-content' : ''}
                    >
                        <JobIntro>
                            <JobTitle>
                                Full Stack Web Developer <TitleSpan>@ Banana Hill Art Gallery</TitleSpan>
                            </JobTitle>
                            <JobTimeline>
                                Sept 2020 - Present
                            </JobTimeline>
                        </JobIntro>
                        <ArrowStatement>
                            <Task> Creating the application's UI/UX designs using Figma</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Assessing UX and UI designs for technical feasibility</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Designing and developing RESTful APIs using Django Rest Framework.</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>
                                Creating the UI using ReactJS + Styled Components, Redux for state
                                management and Axios for integrating RESTful APIs
                            </Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Defining the structure and components for the project, making sure they are reusable.</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Standardizing all output with a new responsive, mobile-first approach and strategy.</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Hosted the back end of the application on a cloud platform.</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Hosted the UI on Netlify using a custom domain from GoDaddy.</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Constantly optimizing the application to achieve a seamless user experience.</Task>
                        </ArrowStatement>
                    </EmploymentHistory>
                    <EmploymentHistory
                        ref={el =>  employmentHistory3 = el} 
                        isActive={toggleState === 3 ? 'active-content' : ''}
                    >
                        <JobIntro>
                            <JobTitle>
                                Full Stack Web Developer <TitleSpan>@ Anzil Software Limited</TitleSpan>
                            </JobTitle>
                            <JobTimeline>
                                Oct 2019 - Present
                            </JobTimeline>
                        </JobIntro>
                        <ArrowStatement>
                            <Task>Participating in the design and creation of highly scalable web applications.</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Assessing UX and UI designs for technical feasibility.</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Designing and developing RESTful APIs using NodeJS, Django and Flask.</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>                                
                                Creating the UI using ReactJS + Styled Components, Redux for state
                                management and Axios for integrating RESTful APIs
                            </Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Defining the structure and components for the projects, making sure they are reusable.</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Standardizing all output with a new responsive, mobile-first approach and strategy.</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Testing, refactoring and fixing bugs or other coding issues.</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Writing technical documentation.</Task>
                        </ArrowStatement>
                    </EmploymentHistory>
                    <EmploymentHistory
                        ref={el =>  employmentHistory4 = el} 
                        isActive={toggleState === 4 ? 'active-content' : ''}
                    >
                        <JobIntro>
                            <JobTitle>
                                Backend/API Developer <TitleSpan>@ Rentor Group</TitleSpan>
                            </JobTitle>
                            <JobTimeline>
                                April 2019 - Sept 2019
                            </JobTimeline>
                        </JobIntro>
                        <ArrowStatement>
                            <Task>Member of a team that was tasked with developing a RESTful API backend</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Integrated several microservices into this backend</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Testing and refactoring code</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Project documentation</Task>
                        </ArrowStatement>
                    </EmploymentHistory>
                </ExperienceDetails>
            </ExperienceBody>
        </ExperienceSection>
    )
}

export default Experience
