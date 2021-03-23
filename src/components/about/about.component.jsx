import React from 'react';

import CustomTitle from '../custom-title/custom-title.component';

import { 
    AboutSection,
    AboutBody,
    DetailsContainer,
    DetailsBody,
    MyDetails 
} from './about.styles';

const About = () => {
    return (
        <AboutSection id='about'>
            <AboutBody>
                <CustomTitle>About Me</CustomTitle>
                <DetailsContainer>
                    <DetailsBody>
                        <MyDetails>Hello! I'm Mark, a software engineer based in Nairobi, Kenya.</MyDetails>
                        <MyDetails>
                            I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. 
                            My goal is to always build products that provide pixel-perfect, performant experiences.
                        </MyDetails>
                        <MyDetails>Here are a few technologies I've been working with recently:</MyDetails>
                    </DetailsBody>
                    <h1>Kamboto</h1>
                </DetailsContainer>
            </AboutBody>
        </AboutSection>
    )
}

export default About
