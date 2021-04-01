import styled from 'styled-components';

export const CustomTitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 45%;
    margin: 0;
    padding-bottom: 10px;
    padding-left: 0;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 50%;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 55%;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        width: 50%;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 50%;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const TitleDetails = styled.h3`
    color: #ffff;
    font-weight: bolder;
    font-size: 30px;
    margin-left: 0;
    line-height: 50px;
`;

export const Titleline = styled.hr`
    height: 0.5px;
    background: #9396a3;
    border:0;
    margin: 0 0 0 -75%;
    width: 350px;

    @media only screen 
    and (min-width: 1920px) 
    and (max-width: 1920px){
        margin: 0 0 0 -77.5%;
    }

    @media only screen 
    and (min-width: 1366px) 
    and (max-width: 1366px)
    and (min-height: 768px) 
    and (max-height: 768px){
        width: 300px;
        margin: 0 0 0 -70%;
    }

    @media only screen 
    and (min-width: 1280px) 
    and (max-width: 1280px)
    and (min-height: 768px) 
    and (max-height: 1024px){
        width: 300px;
        margin: 0 0 0 -68%;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: landscape) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        margin: 0 0 0 -380px;
    }

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        width: 250px;
        margin: 0 0 0 -280px;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        width: 350px;
        margin: 0 0 0 -250px;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 200px;
        margin: 0 0 0 -190px;
    }

    @media screen and (max-width: 480px) {
        width: 150px;
        margin: 0 0 0 -225px;
    }
`;