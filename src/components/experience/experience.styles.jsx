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
    /* border: 1px solid red; */
`;

export const ExperienceDetails = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-top: 25px;
    /* border: 1px solid white; */
    position: relative;
`;

export const CompaniesTabs = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: flex-start;
    margin: 0;
    /* padding-top: 25px; */
    /* border: 1px solid white; */
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

export const TabButton = styled.button`
    min-width: 150px;
    width: auto;
    height: 50px;
    letter-spacing: 0.7px;
    line-height: 45px;
    padding: 0 15px 0 15px;
    margin: 0;
    font-size: 20px;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    color: ${props => props.isActive === 'active' ? '#ff6161': '#9396a3'};
    border: none;
    border-left: ${props => props.isActive === 'active' ? '1px solid #ff6161 !important': '1px solid  #9396a3 !important'};
    outline: none;
    background-color: ${props => props.isActive === 'active' ? '#18224a': ''};

    &:hover {
        color:#ff6161;
        background-color: #18224a;
    }
`;