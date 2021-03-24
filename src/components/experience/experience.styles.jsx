import styled from 'styled-components';

export const ExperienceSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    border: 1px solid red;
`;

export const ExperienceBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    /* margin-top: -20px; */
    margin-left: 100px;
    border: 1px solid red;
`;

export const ExperienceDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-top: 25px;
    border: 1px solid white;
`;

export const CompaniesTabs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    /* padding-top: 25px; */
    border: 1px solid white;

    p {
        color: white;
    }
`;

export const EmploymentHistory = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    /* padding-top: 25px; */
    border: 1px solid white;

    p {
        color: white;
    }
`;