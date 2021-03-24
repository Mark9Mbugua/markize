import React from 'react';

import CustomTitle from '../custom-title/custom-title.component';

import { 
    ExperienceSection,
    ExperienceBody,
    ExperienceDetails,
    CompaniesTabs,
    EmploymentHistory
} from './experience.styles';

const Experience = () => {
    return (
        <ExperienceSection id='experience'>
            <ExperienceBody>
                <CustomTitle>My Journey</CustomTitle>
                <ExperienceDetails>
                    <CompaniesTabs>
                        <p>Dealie</p>
                        <p>BHAG</p>
                        <p>Anzil</p>
                        <p>Rentor</p>
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
