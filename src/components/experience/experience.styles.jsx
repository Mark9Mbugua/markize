import styled from 'styled-components';

export const ExperienceSection = styled.section`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
`;

export const ExperienceBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    margin-left: 100px;
`;

export const ExperienceDetails = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding-top: 25px;
    position: relative;
    min-height: 500px;
`;

export const CompaniesTabs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    padding-top: 25px;
    width: 20%;
`;

export const EmploymentHistory = styled.div`
    display: ${props => props.isActive === 'active-content' ? 'flex': 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-top: 25px;
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

    &:hover {
        color:#ff6161;
        background-color: #18224a;
    }
`;

export const Task = styled.p`
    color:#9396a3;
    line-height: 40px;
    font-size: 20px;
`;

export const JobIntro = styled.div`
    margin-bottom: 20px;
`;

export const JobTitle = styled.h1`
    color: #fff;
    line-height: 45px;
    font-size: 30px;
`;

export const TitleSpan = styled.span`
    color:#ff6161;
    padding: 0;
    margin: 0;
`;

export const JobTimeline = styled(Task)`
    font-size: 18px;
`;
