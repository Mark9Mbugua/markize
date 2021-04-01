import styled from 'styled-components';
import { Link } from 'react-scroll';

export const LandingSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;

    @media screen and (max-width: 480px) {
        align-items: start;
    }
`;

export const LandingBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    margin-top: 30px;
    margin-left: 100px;

    @media screen and (max-width: 480px) {
        width: 100%;
        margin-left: 35px;
        margin-top: 80px;
    }
`;

export const MyName = styled.p`
    color: #ff6161;
    font-size: 25px;

    @media screen and (max-width: 480px) {
        font-size: 18px;    
    }
`;

export const HeadingTwo = styled.h1`
    color:#9396a3;
    font-size: 75px;
    line-height: 110px;

    @media screen and (max-width: 480px) {
        font-size: 35px;
        line-height: 70px;   
    }
`;

export const HeadingOne = styled.h1`
    color:#ffff;
    font-size: 75px;
    line-height: 110px;

    @media screen and (max-width: 480px) {
        font-size: 35px;
        line-height: 70px;   
    }
`;

export const IntroDetails = styled.p`
    color:#9396a3;
    font-size: 35px;
    line-height: 60px;

    @media screen and (max-width: 480px) {
        font-size: 22px;
        line-height: 40px;  
    }
`;

export const FavStack = styled.span`
    color: #ff6161;
    padding: 0;
    margin: 0;
`;

export const LandingButtonContainer = styled.div`
    margin-top: 90px;
    padding: 0;
    width: 168px;

    @media screen and (max-width: 480px) {
        margin-top: 50px; 
    }
`;

export const ContactLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;