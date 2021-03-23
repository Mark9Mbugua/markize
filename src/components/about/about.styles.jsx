import styled from 'styled-components';

export const AboutSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    border: 1px solid red;
`;

export const AboutBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    height: auto;
    margin-top: -100px;
    margin-left: 100px;
    border: 1px solid red;
`;



export const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-top: 25px;
    border: 1px solid red;
`;

export const DetailsBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    border: 1px solid red;
`;

export const MyDetails = styled.p`
    color: #9396a3;
    line-height: 40px;
    font-size: 20px;
`;