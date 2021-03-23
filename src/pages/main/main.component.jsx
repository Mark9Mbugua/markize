import React from 'react';

import Landing from '../../components/landing-section/landing.component';
import About from '../../components/about/about.component';
import Portfolio from '../../components/portfolio/portfolio.component';
import Experience from '../../components/experience/experience.component';
import Contact from '../../components/contact/contact.component';

import { MainContainer } from './main.styles';

const Main = () => {
    return (
        <MainContainer>
            <Landing />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
        </MainContainer>
    )
}

export default Main
