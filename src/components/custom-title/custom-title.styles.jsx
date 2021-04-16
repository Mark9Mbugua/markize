import styled from 'styled-components';

export const CustomTitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 23%;
    margin: 0;
    padding-bottom: 1.6rem;
    padding-left: 0;

    @media screen and (max-width: 1440px) {
        max-width: 25%;
    }

    @media screen and (max-width: 1366px) {
        max-width: 27%;
    }

    @media screen and (max-width: 1280px) {
        max-width: 30%;
    }

    @media screen and (max-width: 1024px) {
        max-width: 31%;
    }

    @media screen and (max-width: 768px) {
        max-width: 42%;
    }

    @media screen and (max-width: 600px) {
        max-width: 65%;
    }

    @media screen and (max-width: 480px) {
        max-width: 71%;
    }

    @media screen and (max-width: 320px) {
        max-width: 75%;
    }
`;

export const TitleDetails = styled.h3`
    color: #ffff;
    font-weight: bolder;
    font-size: 1.9em;
    margin-left: 0;
    min-width: 20%;

    @media only screen and (max-width: 320px){
        font-size: 1.7em;
    }
`;

export const Titleline = styled.hr`
    height: 0.5px;
    background: #9396a3;
    border:0;
    max-width: 50%;
`;