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

export const PortfolioDetailsBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-top: 25px;
    border: 1px solid white;
`;

export const ProjectImageContainer = styled.div`
    width: 100%;
    height: 450px;
    position: relative;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .45;
    transition: .5s ease;
    background-color:#ff6161;
    
    &:hover {
        opacity: 0;
    }
`;

export const ProjectImageSrc = styled.img`
    width: 100%;
    height: 100%;
`;

export const ProjectDetails = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start;
    align-items: flex-start; */
    margin: 0;
    padding-top: 25px;
    border: 1px solid white;
    height: 450px;

`;

export const ProjectTypeContainer = styled.div` 
    border: 1px solid white;
    display: block;
    text-align: end;
`;

export const ProjectType = styled.p`
    color:#ff6161;
`;

export const ProjectTitleContainer = styled(ProjectTypeContainer)` 
`;

export const ProjectTitle = styled.h1`
    color:#ffff;
`;

export const ProjectDescriptionContainer = styled.div` 
    background-color: #ffff;
    background:#18224a;
    height: 30%;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;  

    p {
        margin-left: auto;
        color:#9396a3;
        background:#18224a;
        align-self: flex-end;
    }
`;



