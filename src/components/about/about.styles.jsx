import styled from 'styled-components';

export const AboutSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
`;

export const AboutBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    margin-top: -20px;
    margin-left: 100px;
`;

export const DetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-top: 25px;
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