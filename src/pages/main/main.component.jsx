import React from 'react';

import Landing from '../../components/landing-section/landing.component';
import About from '../../components/about/about.component';
import Portfolio from '../../components/portfolio/portfolio.component';
import Experience from '../../components/experience/experience.component';
import Contact from '../../components/contact/contact.component';

const Main = () => {
    return (
        <>
            <Landing />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Main
