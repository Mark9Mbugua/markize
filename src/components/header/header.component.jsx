import React, { useState, useEffect } from 'react';

import { 
    HeaderContainer,
    Burger 
} from './header.styles';

import Navbar from '../navbar/navbar.component';

const Header = () => {
    const [displayMobileNavbar, setDisplayMobileNavbar] = useState(false);
    
    useEffect(() => {
        window.addEventListener('resize', checkAndAutoHideMobileNavbar);
        return () => {
            window.removeEventListener('resize', checkAndAutoHideMobileNavbar);   
        }
    }, []);

    const checkAndAutoHideMobileNavbar = () => {
        const screenWidth = window.innerWidth
        if (displayMobileNavbar && screenWidth > 768) {
            setDisplayMobileNavbar(false);
        }
    }

    return (
        <HeaderContainer>
            <Navbar 
                displayMobileNavbar={displayMobileNavbar}
                setDisplayMobileNavbar={setDisplayMobileNavbar}
            />
            <Burger
                displayMobileNavbar={displayMobileNavbar} 
                onClick={() => setDisplayMobileNavbar(!displayMobileNavbar)}
            >
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </Burger>
        </HeaderContainer>
    );
}

export default Header