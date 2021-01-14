import React from 'react';
import { 
    Nav,
    Logo,
    LogoLink,
    NavLinks,
    NavLink
} from './navbar.styles';

const Navbar = ({displayMobileNavbar, setDisplayMobileNavbar}) => {
    return (
        <Nav>
            <Logo>
                <LogoLink to='/'>Mark Mbugua</LogoLink>
            </Logo>
            <NavLinks displayMobileNavbar={displayMobileNavbar}>
                <NavLink 
                    to="/"
                    onClick={() => setDisplayMobileNavbar(false)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/projects"
                    onClick={() => setDisplayMobileNavbar(false)}  
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/education"
                    onClick={() => setDisplayMobileNavbar(false)}  
                >
                    Education
                </NavLink>
                <NavLink
                    to="/contact-me"
                    onClick={() => setDisplayMobileNavbar(false)}  
                >
                    Contact Me
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
