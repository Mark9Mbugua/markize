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
    margin-left: 6.25rem;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        margin-left: 3rem;
        width: 85%;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        margin-left: 3rem;
        width: 85%;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        margin-left: 20px;
    }
`;

export const PortfolioDetailsBody = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-bottom: 4.4rem;

    @media screen and (max-width: 1366px) {
        width: 94%;
    }

    @media screen and (max-width: 1024px) {
        width: 95%;
    }

    @media screen and (max-width: 768px) {
        width: 99%;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        width: 100%;
        padding-right: 1.5rem;
        justify-content: flex-start;
    }
`;

export const ProjectImageContainer = styled.div`
    width: 100%;
    height: auto;
    position: relative;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 99%;
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
    object-fit: contain;

    @media screen and (max-width: 480px) {
        margin-left: 0;
    }
`;

export const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
    height: 28em;
    position: relative;

    @media screen and (max-width: 1024px) {
        height: 26em;
    }

    @media screen and (max-width: 768px) {
        height: 23em;
    }

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
    border-radius: 3px; 

    p {
        color:#9396a3;
        background:#18224a;
        font-size: 1.1em;
    }

    @media screen and (max-width: 768px) {
        p {
            font-size: 1em;
        }
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
    grid-template-columns: repeat(auto-fit, minmax(3rem, 9rem));
    justify-content: space-around;
    grid-gap: 0.3rem;

    @media screen and (max-width: 480px) {
        justify-content: start;
        grid-gap: 0.5rem;
    }

    @media screen and (max-width: 320px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const TechStack = styled.p` 
    color:#9396a3;
    font-size: 1em;
`;

export const ExternalLinkContainer = styled.div` 
    display: flex;
    justify-content: flex-end;
`;

export const ExternalLink = styled.a`
    display: block;
    text-decoration: none;
    cursor: pointer;
    margin-left: 95%;

    @media screen and (max-width: 480px) {
        margin-left: unset;
        margin-right: 90%;
    }
`;

export const ExternalLinkInverted = styled(ExternalLink)`
    margin-left: unset;
    margin-right: 95%;
    justify-content: flex-end;

    @media screen and (max-width: 480px) {
        margin-right: 90%;
    }
`;

export const ExternalImageLink = styled(ExternalLink)`
    margin-left: unset;
`;

export const ExternalLinkSvg = styled.img` 
    height: 30px;
    width: 25px;
`;


