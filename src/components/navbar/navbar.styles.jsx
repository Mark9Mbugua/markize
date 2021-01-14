import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    min-height: 8vh;
    background: inherit;
    align-items: center;
`;

export const Logo = styled.div`
    color: #00264d;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 18px;
    
    @media screen and (max-width: 768px) {
        letter-spacing: 3px;
        font-size: 16px;
    }            
`;


export const LogoLink = styled(Link)`
    text-decoration: none;
    color: #00264d;
    text-decoration: none;
    font-family: 'Dancing Script', cursive;
    font-size: 25px;
    cursor: pointer;

    &:hover {
        color: #1a8cff;
    }

    &:focus {
        color: #1a8cff;
    }
`;


export const NavLinks = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 40%; 
    @media screen and (max-width: 1024px) {
        width: 50%;
    }
    @media screen and (max-width: 768px) {
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
    }
`;


export const NavLink = styled(Link)`
    text-decoration: none;
    color: #00264d;
    text-decoration: none;
    letter-spacing: 2px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        color: #1a8cff;
    }

    &:focus {
        color: #1a8cff;
    }
`;