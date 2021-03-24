import React, { useState } from 'react';

import CustomTitle from '../custom-title/custom-title.component';
import ArrowStatement from '../arrow-statement/arrow-statement.component';

import { 
    ExperienceSection,
    ExperienceBody,
    ExperienceDetails,
    CompaniesTabs,
    EmploymentHistory,
    TabButton,
    Task 
} from './experience.styles';

const Experience = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <ExperienceSection id='experience'>
            <ExperienceBody>
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
                    <EmploymentHistory isActive={toggleState === 1 ? 'active-content' : ''}>
                        <ArrowStatement>
                            <Task> Designing and developing RESTful APIs using Django</Task>
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
                    <EmploymentHistory isActive={toggleState === 2 ? 'active-content' : ''}>
                        <ArrowStatement>
                            <Task> Creating the application's UI/UX designs using Figma</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Assessing UX and UI designs for technical feasibility</Task>
                        </ArrowStatement>
                        <ArrowStatement>
                            <Task>Designing and developing RESTful APIs using Django.</Task>
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
                    <EmploymentHistory isActive={toggleState === 3 ? 'active-content' : ''}>
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
                    <EmploymentHistory isActive={toggleState === 4 ? 'active-content' : ''}>
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
