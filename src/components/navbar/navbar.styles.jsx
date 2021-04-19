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
    height: 3rem;
    width: 3rem;
    margin-left: 1.6rem;
    
    @media screen and (max-width: 480px) {
        height: 2.5rem;
        width: 2.5rem;
        overflow: hidden;
    }

    @media screen and (max-width: 320px) {
        height: 2.1rem;
        width: 2.1rem;
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
        position: fixed;
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
        z-index: 100;
        margin-right: 0;
    }
`;


export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color:#9396a3;
    text-decoration: none;
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
        height: 15%;
        width: 80%;
  }
`;

export const Burger = styled.div`
  display: none;
  cursor: pointer;
  
  @media screen and (max-width: 480px) {
    display: block;
    margin-right: 1.6rem;
    width: 25px;

    div {
        margin: 5px 5px 5px auto;
        z-index: 10;
        width: 25px;
        height: 3px;
        background-color: #ff6161;
        transition: all 0.3s linear;
        transform-origin: 1px;
        
        &:nth-child(1) {
        transform: ${({ displayMobileNavbar }) =>
            displayMobileNavbar ? "rotate(45deg)" : "rotate(0)"};
        }
        
        &:nth-child(2) {
        transform: ${({ displayMobileNavbar }) =>
            displayMobileNavbar ? "translateX(100%)" : "translateX(0)"};
        opacity: ${({ displayMobileNavbar }) => (displayMobileNavbar ? 0 : 1)};
        }
        
        &:nth-child(3) {
        transform: ${({ displayMobileNavbar }) =>
            displayMobileNavbar ? "rotate(-45deg)" : "rotate(0)"};
        }
    }    
  }
`;