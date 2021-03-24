import styled from 'styled-components';

export const PortfolioSection = styled.section`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    border: 1px solid red;
`;

export const PortfolioBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    margin-top: 30px;
    margin-left: 100px;
    border: 1px solid red;
`;

export const PortfolioDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    /* padding-top: 25px; */
    border: 1px solid white;
`;