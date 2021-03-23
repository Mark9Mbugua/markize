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
    color:#9396a3;
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 18px;
    margin-left: 0;
    width: 25%;
    
    @media screen and (max-width: 768px) {
        letter-spacing: 3px;
        font-size: 16px;
        margin-left: unset;
    }            
`;


export const LogoLink = styled(Link)`
    text-decoration: none;
    color:#ff6161;
    text-decoration: none;
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
    margin-left: 0;
    cursor: pointer;

    &:hover {
        color:#9396a3;
    }

    &:focus {
        color:#9396a3;
    }

    @media screen and (max-width: 768px) {
        margin-left: unset;
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