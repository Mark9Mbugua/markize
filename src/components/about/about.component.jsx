import React from 'react';

import CustomTitle from '../custom-title/custom-title.component';
import ArrowStatement from '../arrow-statement/arrow.statement-component';
import MyImage from '../my-image/my-image.component';

import { 
    AboutSection,
    AboutBody,
    DetailsContainer,
    DetailsBody,
    MyDetails,
    TechStack,
    ImageBody
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
                                <MyDetails>Heroku</MyDetails>
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
    )
}

export default About
