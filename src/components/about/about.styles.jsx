import styled from 'styled-components';
import { ExternalImageLink } from '../portfolio/portfolio.styles';

export const AboutSection = styled.section`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        height: 80vh;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        height: 70vh;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        height: 115vh;
    }

    @media screen and (max-width: 768px) {
        min-height: unset;
    }
`;

export const AboutBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    margin-top: -20px;
    margin-left: 100px;
    flex-wrap: wrap;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        margin-top: 50px;
        margin-left: 50px;
        width: 85%;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        width: 85%;
        margin-left: 50px;
        margin-top: unset;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 85%;
        margin-top: 80px;
        margin-left: 50px;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        margin-left: 20px;
        margin-top: unset;
    }
`;

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-top: 25px;

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        flex-direction: column;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        padding-right: 25px;
        padding-top: 10px;
    }
`;

export const DetailsBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    flex: 1 1 auto;
`;

export const MyDetails = styled.p`
    color: #9396a3;
    line-height: 40px;
    font-size: 20px;
`;

export const TechStack = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
`;

export const ImageBody = styled.div`
    justify-self: center;
    display: flex;
    justify-content: center;
    width: 50%;
    height: 50%;
    border: 1px solid red;
`;

export const GithubLink = styled(ExternalImageLink)`
    display: flex;
    justify-content: center;
`;