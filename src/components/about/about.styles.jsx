import styled from 'styled-components';

export const AboutSection = styled.section`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    /* border: 1px solid red; */

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
    margin-left: 6.25rem;
    flex-wrap: wrap;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        margin-left: 3rem;
        width: 85%;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
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
        margin-left: 1.25rem;
    }
`;

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    margin: 0;
    padding-top: 1.6rem;
    /* border: 1px solid red; */

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: 480px) {
        flex-direction: column;
        padding-right: 1.6rem;
        padding-top: 0.63rem;
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
    line-height: 2.5rem;
    font-size: 1.25rem;
`;

export const TechStack = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
`;