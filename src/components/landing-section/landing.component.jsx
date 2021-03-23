import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import { 
    LandingSection,
    LandingBody,
    HeadingOne, 
    HeadingTwo,
    IntroDetails,
    MyName,
    FavStack,
    LandingButtonContainer 
} from './landing.styles';

const Landing = () => {
    return (
        <LandingSection id='landing'>
            <LandingBody>
                <MyName>Hi, my name is</MyName>
                <HeadingOne>Mark Mbugua.</HeadingOne>
                <HeadingTwo>I write code for the internet.</HeadingTwo>
                <IntroDetails>I am a Software Engineer and an Internet Enterpreneur</IntroDetails>
                <IntroDetails>I am a creator and a consultant</IntroDetails>
                <IntroDetails><FavStack>ReactJS</FavStack> is my main weapon of mass creation</IntroDetails>
                <LandingButtonContainer>
                    <CustomButton>Get in Touch</CustomButton>
                </LandingButtonContainer>
            </LandingBody>
        </LandingSection>
    )
}

export default Landing
