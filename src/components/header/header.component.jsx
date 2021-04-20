import React, { useState, useEffect } from 'react';

import { HeaderContainer } from './header.styles';

import Navbar from '../navbar/navbar.component';

const Header = () => {
    const [displayMobileNavbar, setDisplayMobileNavbar] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [visible, setVisible] = useState(true);
    
    const handleScroll = () => { 
        // find current scroll position
        const currentScrollPos = window.pageYOffset;
    
        // set state based on location info
        // setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
        setVisible(prevScrollPos > currentScrollPos);
    
        // set state to new scroll position
        setPrevScrollPos(currentScrollPos);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);
    
    useEffect(() => {
        window.addEventListener('resize', checkAndAutoHideMobileNavbar);
        return () => window.removeEventListener('resize', checkAndAutoHideMobileNavbar);   
    }, []);

    const checkAndAutoHideMobileNavbar = () => {
        const screenWidth = window.innerWidth
        if (displayMobileNavbar && screenWidth > 768) {
            setDisplayMobileNavbar(false);
        }
    }

    return (
        <HeaderContainer 
            visible={visible}
        >
            <Navbar 
                displayMobileNavbar={displayMobileNavbar}
                setDisplayMobileNavbar={setDisplayMobileNavbar}
            />
        </HeaderContainer>
    );
}

export default Header