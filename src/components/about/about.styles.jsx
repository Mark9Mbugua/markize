import styled from 'styled-components';

export const AboutSection = styled.section`
    height: 100vh;
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

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        align-items: flex-start;
    }

    @media screen and (max-width: 480px) {
        height: 150vh;
        align-items: flex-start;
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
        margin-top: 10px;
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
        /* justify-content: space-evenly; */
    }
`;

export const DetailsBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
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
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr; 
    justify-content: center; */
    align-items: center;
`;