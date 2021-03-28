import React from 'react';

import ProjectImage1 from '../../assets/bhag.jpg';

import CustomTitle from '../custom-title/custom-title.component';

import { 
    PortfolioSection,
    PortfolioBody,
    PortfolioDetailsBody,
    ProjectImageContainer,
    ProjectImageSrc,
    ProjectDetails,
    ProjectTypeContainer,
    ProjectType,
    ProjectTitleContainer,
    ProjectTitle,
    ProjectDescriptionContainer,
    Overlay
} from '../portfolio/portfolio.styles';

const Portfolio = () => {
    return (
        <PortfolioSection id='portfolio'>
            <PortfolioBody>
                <CustomTitle>Portfolio</CustomTitle>
                <PortfolioDetailsBody>
                    <ProjectImageContainer>
                        <ProjectImageSrc src={ProjectImage1} />
                        <Overlay />
                    </ProjectImageContainer>
                    <ProjectDetails>
                        <ProjectTypeContainer>
                            <ProjectType>Client Project</ProjectType>
                        </ProjectTypeContainer>
                        <ProjectTitleContainer>
                            <ProjectTitle>Banana Hill Art Gallery</ProjectTitle>
                        </ProjectTitleContainer>
                        <ProjectDescriptionContainer>
                            <p>A website that displays contemprary African artwork by some of Africa's finest artists</p>
                            <p>Developed its frontend and backend, then deployed the website</p>
                        </ProjectDescriptionContainer>
                        <div>
                            <h1>Tech Stack</h1>
                        </div>
                        <div>
                            <h1>Project Link</h1>
                        </div>
                    </ProjectDetails>
                </PortfolioDetailsBody>
            </PortfolioBody>
        </PortfolioSection>
    )
}

export default Portfolio
