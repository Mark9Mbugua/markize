import styled from 'styled-components';

export const ExperienceSection = styled.section`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        height: 70vh;
    }

    @media screen and (max-width: 768px) {
        min-height: unset;
    }
`;

export const ExperienceBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 75%;
    margin-left: 100px;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
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
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 85%;
        margin-left: 50px;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
        margin-left: 20px;
    }
`;

export const ExperienceDetails = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding-top: 25px;
    position: relative;
    min-height: 500px;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        max-width: 100vw;
    }
`;

export const CompaniesTabs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    padding-top: 25px;
    width: 20%;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        margin: 0 10px 0 0;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        margin: 0 8px 0 0;
        width: 18%;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        margin: 0 15px 0 0;
    }

    @media screen and (max-width: 480px) {
        flex-direction: unset;
        overflow-x: auto;
        overflow-y: hidden;
        width: 100%;
        width: 95%;
        padding-top: unset;
    }
`;

export const EmploymentHistory = styled.div`
    display: ${props => props.isActive === 'active-content' ? 'flex': 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-top: 25px;

    @media only screen 
    and (min-width: 1024px) 
    and (max-height: 1366px)
    and (orientation: portrait) 
    and (-webkit-min-device-pixel-ratio: 1.5) {
        margin: 0 0 0 10px;
    }

    @media screen 
    and (min-width: 768px)
    and (max-width: 1024px)
    and (min-height: 768px)
    and (max-height: 768px) {
        margin: 0 0 0 8px;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        margin: 0 0 0 20px;
    }

    @media screen and (max-width: 480px) {
        padding-right: 25px;
    }
`;

export const TabButton = styled.button`
    min-width: 1.2rem;
    width: auto;
    min-height: 3rem;
    letter-spacing: 0.06em;
    line-height: 2.5em;
    padding: 0 1.5em 0 1.5em;
    margin: 0;
    font-size: 1.25em;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    color: ${props => props.isActive === 'active' ? '#ff6161': '#9396a3'};
    border: none;
    border-left: ${props => props.isActive === 'active' ? '1px solid #ff6161 !important': '1px solid  #9396a3 !important'};
    outline: none;

    &:hover {
        color:#ff6161;
        background-color: #18224a;
    }

    @media screen and (max-width: 480px) {
        min-width: 1.5rem;
        justify-content: center;
        border-bottom: ${props => props.isActive === 'active' ? '1px solid #ff6161 !important': '1px solid  #9396a3 !important'};
        border-left: none !important;
    }
`;

export const Task = styled.p`
    color:#9396a3;
    line-height: 2.5rem;
    font-size: 1.25rem;
`;

export const JobIntro = styled.div`
    margin-bottom: 20px;
`;

export const JobTitle = styled.h1`
    color: #fff;
    line-height: 2.8rem;
    font-size: 1.5rem;
`;

export const TitleSpan = styled.span`
    color:#ff6161;
    padding: 0;
    margin: 0;
`;

export const JobTimeline = styled(Task)`
    font-size: 1.1rem;
`;
