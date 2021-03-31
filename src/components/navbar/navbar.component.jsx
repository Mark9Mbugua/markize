import React from 'react';

import MyLogo from '../../assets/Logo.svg';

import { 
    Nav,
    Logo,
    LogoLink,
    NavLinks,
    NavLink,
    LogoSrc
} from './navbar.styles';

const Navbar = ({displayMobileNavbar, setDisplayMobileNavbar}) => {
    return (
        <Nav>
            <Logo>
                <LogoLink to='/'>
                   <LogoSrc src={MyLogo} /> 
                </LogoLink>
            </Logo>
            <NavLinks displayMobileNavbar={displayMobileNavbar}>
                <NavLink
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {700}
                    onClick={() => setDisplayMobileNavbar(false)}  
                >
                    About
                </NavLink>
                <NavLink
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {700}
                    onClick={() => setDisplayMobileNavbar(false)}  
                >
                    Experience
                </NavLink>
                <NavLink
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {700}
                    onClick={() => setDisplayMobileNavbar(false)}  
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {700}
                    onClick={() => setDisplayMobileNavbar(false)}  
                >
                    Contact
                </NavLink>
            </NavLinks>
            {/* <Burger
                displayMobileNavbar={displayMobileNavbar} 
                onClick={() => setDisplayMobileNavbar(!displayMobileNavbar)}
            >
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </Burger> */}
        </Nav>
    )
}

export default Navbar
