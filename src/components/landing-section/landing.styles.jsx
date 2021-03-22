import styled from 'styled-components';

export const LandingSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    /* border: 1px solid red; */
`;

export const LandingBody = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: auto;
    margin-top: -100px;
    margin-left: 100px;
`;

export const MyName = styled.p`
    color: #00ffea;
    font-size: 25px;
`;

export const HeadingTwo = styled.h1`
    color:#9396a3;
    font-size: 75px;
    line-height: 110px;
`;

export const HeadingOne = styled.h1`
    color:#ffff;
    font-size: 75px;
    line-height: 110px;
`;

export const IntroDetails = styled.p`
    color:#9396a3;
    font-size: 35px;
    line-height: 60px;
`;

export const FavStack = styled.span`
    color: #00ffea;
    padding: 0;
    margin: 0;
`;