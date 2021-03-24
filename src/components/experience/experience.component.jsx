import React, { useState } from 'react';

import CustomTitle from '../custom-title/custom-title.component';

import { 
    ExperienceSection,
    ExperienceBody,
    ExperienceDetails,
    CompaniesTabs,
    EmploymentHistory,
    TabButton
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
                    <EmploymentHistory>
                        <p>Employment Details</p>
                    </EmploymentHistory>
                </ExperienceDetails>
            </ExperienceBody>
        </ExperienceSection>
    )
}

export default Experience
