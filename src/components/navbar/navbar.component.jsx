import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';

import MyLogo from '../../assets/Logo.svg';

import { 
    Nav,
    Logo,
    LogoLink,
    NavLinks,
    NavLink,
    NavLinkContainer,
    LogoSrc,
    Burger
} from './navbar.styles';

const Navbar = ({displayMobileNavbar, setDisplayMobileNavbar}) => {
    let about = useRef(null);
    let experience = useRef(null);
    let portfolio = useRef(null);
    let contact = useRef(null);

    useEffect(() =>{
        gsap.from([about, experience, portfolio, contact], {duration: .6, opacity: 0, x: -30, y: -100, stagger: 0.15})
    }, []);


    return (
        <Nav>
            <Logo>
                <LogoLink
                    displayMobileNavbar={displayMobileNavbar}                     
                    to="landing"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={1000}
                    onClick={() => setDisplayMobileNavbar(false)} 
                >
                    <LogoSrc src={MyLogo} /> 
                </LogoLink>
            </Logo>
            <NavLinks displayMobileNavbar={displayMobileNavbar}>
                <NavLinkContainer  ref={el => about = el}>
                    <NavLink
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}
                        onClick={() => setDisplayMobileNavbar(false)}  
                    >
                        About
                    </NavLink>
                </NavLinkContainer>
                <NavLinkContainer ref={el => experience = el}>
                    <NavLink
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}
                        onClick={() => setDisplayMobileNavbar(false)}  
                    >
                        Experience
                    </NavLink>
                </NavLinkContainer>
                <NavLinkContainer ref={el => portfolio = el}>
                    <NavLink
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}
                        onClick={() => setDisplayMobileNavbar(false)}  
                    >
                        Portfolio
                    </NavLink>
                </NavLinkContainer>
                <NavLinkContainer ref={el => contact = el}>
                    <NavLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={700}
                        onClick={() => setDisplayMobileNavbar(false)}  
                    >
                        Contact
                    </NavLink>
                </NavLinkContainer>
            </NavLinks>
            <Burger
                displayMobileNavbar={displayMobileNavbar} 
                onClick={() => setDisplayMobileNavbar(!displayMobileNavbar)}
            >
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </Burger>
        </Nav>
    )
}

export default Navbar
