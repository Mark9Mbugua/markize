import styled from 'styled-components';

export const PortfolioSection = styled.section`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    overflow-x: hidden;

    @media screen and (max-width: 768px) {
        min-height: unset;
    }
`;

export const PortfolioBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    margin-top: 30px;
    margin-left: 100px;

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 85%;
        margin-left: 50px;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        margin-left: 20px;
    }
`;

export const PortfolioDetailsBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-top: 1.6rem;
    margin-bottom: 4.4rem;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        width: 100%;
        padding-right: 1.5rem;
        justify-content: flex-start;
    }
`;

export const ProjectImageContainer = styled.div`
    width: 100%;
    height: 28.2rem;
    position: relative;

    @media screen 
    and (min-width:1280px)
    and (max-width: 1280px){
        height: 400px;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        height: 370px;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        height: 400px;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        height: 350px;
    }

    @media screen and (max-width: 480px) {
        display: none;
        /* height: 250px;
        width: 300px;
        border: 1px solid red;
        display: flex;
        justify-content: flex-start; */
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .45;
    transition: .5s ease;
    background-color:#ff6161;
    
    &:hover {
        opacity: 0;
    }
`;

export const ProjectImageSrc = styled.img`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 480px) {
        margin-left: 0;
    }
`;

export const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    padding-top: 25px;
    height: 30em;
    position: relative;

    @media screen and (max-width: 480px) {
        height: unset;
        align-items: flex-start;
        min-height: 30em;
    }

`;

export const ProjectTypeContainer = styled.div` 
    display: block;
    text-align: end;

    @media screen and (max-width: 480px) {
        text-align: start;
    }
`;

export const ProjectTypeInvertedContainer = styled(ProjectTypeContainer)` 
    text-align: start;
`;

export const ProjectType = styled.p`
    color:#ff6161;
`;

export const ProjectTitle = styled.h1`
    color:#ffff;
`;

export const ProjectDescriptionContainer = styled.div` 
    background-color: #ffff;
    background:#18224a;
    height: 30%;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 110%;
    flex-shrink: 1.5;
    margin-left: -10%;
    z-index: 1;
    text-align: start;
    padding: 0 1.8rem;
    border-radius: 5px; 

    p {
        color:#9396a3;
        background:#18224a;
        font-size: 1.1em;
    }

    @media screen and (max-width: 480px) {
        min-height: 12.5rem;
        width: 100%;
        margin-left: unset;
        align-items: flex-start;
        text-align: start;
        z-index: unset;
        padding: 0 0.3em;
        border-radius: 3px; 

        p {
            margin-left: 0;
            line-height: 2em;
        }
    }
`;

export const ProjectDescriptionInvertedContainer = styled(ProjectDescriptionContainer)` 
    margin-left: 0;
    text-align: start;
`;

export const TechStackContainer = styled.div` 
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1rem, 9rem));
    justify-content: space-evenly;
    grid-column-gap: 0.5rem;

    @media screen and (max-width: 480px) {
        justify-content: start;
        grid-row-gap: 0.32rem;
    }

    @media screen and (max-width: 320px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const TechStack = styled.p` 
    color:#9396a3;
`;

export const ExternalLinkContainer = styled.div` 
    /* border: 1px solid red; */
`;

export const ExternalLink = styled.a`
    display: block;
    text-decoration: none;
    cursor: pointer;
    margin-left: 95%;

    @media screen and (max-width: 480px) {
        margin-left: 0;
    }
`;

export const ExternalLinkInverted = styled(ExternalLink)`
    margin-left: 0;
`;

export const ExternalLinkSvg = styled.img` 
    height: 30px;
    width: 25px;
`;


