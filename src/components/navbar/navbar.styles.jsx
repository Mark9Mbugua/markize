import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    min-height: 8vh;
    background: inherit;
    align-items: center;
    width: 100%;
`;

export const Logo = styled.div`
    height: 60px;
    width: 60px;
    margin-left: 30px;
    margin-top: 15px;

    @media screen and (max-width: 480px) {

    }            
`;

export const LogoSrc = styled.img`
    width: 100%;
    height: 100%;           
`;



export const LogoLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 480px) {
    }     
`;

export const NavLinks = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    margin-right: 70px; 
    
    @media screen and (max-width: 480px) {
        position: absolute;
        right: 0px;
        height: 92vh;
        top: 8vh;
        background: #74706D;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        transition: transform 0.5s ease-in;
        transform: translateX(${ props => props.displayMobileNavbar ? ("0%"): ("100%") });
        z-index: 5;
        margin-right: unset; 
    }
`;


export const NavLink = styled(Link)`
    color:#9396a3;
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    width: 30%;
    cursor: pointer;

    &:hover {
        color:#ff6161;
    }

    &:focus {
        color:#ff6161;
    }
`;