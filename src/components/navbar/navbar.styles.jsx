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
    height: 3.75rem;
    width: 3.75rem;
    margin-left: 1.875rem;
    margin-top: 0.94rem;
    
    @media screen and (max-width: 480px) {
        height: 2.5rem;
        width: 2.5rem;
        overflow: hidden;
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

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 50%;
        margin-right: 20px;
    } 
    
    @media screen and (max-width: 480px) {
        position: absolute;
        right: 0px;
        height: 92vh;
        top: 8vh;
        background: inherit;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70%;
        transition: transform 0.5s ease-in;
        transform: translateX(${ props => props.displayMobileNavbar ? ("6%"): ("106%") });
        z-index: 5;
        margin-right: 0;
    }

    @media screen and (max-width: 320px) {
        top: 10vh;
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

    @media screen and (max-width: 480px) {
        background: inherit;
        height: 15%;
        width: 80%;
  }
`;