import styled from 'styled-components';

export const HeaderContainer = styled.div`
    align-self: center;
    width: 97%;

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (max-width: 480px) {
        display: flex;
        justify-items: space-between;
        width: 100%;
    }
`;

export const Burger = styled.div`
  display: none;
  cursor: pointer;
  
  @media screen and (max-width: 480px) {
    display: block;
    margin: 1.5rem 0.94rem 0 0;
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