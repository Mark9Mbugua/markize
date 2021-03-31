import React from 'react';

import ProjectImage1 from '../../assets/bhag.jpg';
import ExternalLinkSrc from '../../assets/external-link.svg';

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
    Overlay,
    TechStackContainer,
    TechStack,
    ExternalLinkContainer,
    ExternalLink,
    ExternalLinkSvg,
    ProjectTypeInvertedContainer,
    ProjectTitleInvertedContainer,
    ProjectDescriptionInvertedContainer,
    ExternalLinkInverted
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
                            <p>Developed its frontend and backend, then deployed it.</p>
                        </ProjectDescriptionContainer>
                        <TechStackContainer>
                            <TechStack>ReactJS</TechStack>
                            <TechStack>Redux</TechStack>
                            <TechStack>Styled Components</TechStack>
                            <TechStack>Django Rest Framework</TechStack>
                            <TechStack>Heroku</TechStack>
                            <TechStack>AWS S3</TechStack>
                            <TechStack>Cloudfront</TechStack>
                        </TechStackContainer>
                        <ExternalLinkContainer>
                            <ExternalLink href="https://www.bananahillsartgallery.com/" target="_blank">
                                < ExternalLinkSvg src={ExternalLinkSrc} />
                            </ExternalLink>
                        </ExternalLinkContainer>
                    </ProjectDetails>
                </PortfolioDetailsBody>
                <PortfolioDetailsBody>
                    <ProjectDetails>
                        <ProjectTypeInvertedContainer>
                            <ProjectType>My Project</ProjectType>
                        </ProjectTypeInvertedContainer>
                        <ProjectTitleInvertedContainer>
                            <ProjectTitle>Dealie</ProjectTitle>
                        </ProjectTitleInvertedContainer>
                        <ProjectDescriptionInvertedContainer>
                            <p>A website that displays contemprary African artwork by some of Africa's finest artists</p>
                            <p>Developed its frontend and backend, then deployed it.</p>
                        </ProjectDescriptionInvertedContainer>
                        <TechStackContainer>
                            <TechStack>ReactJS</TechStack>
                            <TechStack>Redux</TechStack>
                            <TechStack>Styled Components</TechStack>
                            <TechStack>Django Rest Framework</TechStack>
                            <TechStack>Heroku</TechStack>
                            <TechStack>AWS S3</TechStack>
                            <TechStack>Cloudfront</TechStack>
                        </TechStackContainer>
                        <ExternalLinkContainer>
                            < ExternalLinkInverted href="https://www.bananahillsartgallery.com/" target="_blank">
                                < ExternalLinkSvg src={ExternalLinkSrc} />
                            </ ExternalLinkInverted>
                        </ExternalLinkContainer>
                    </ProjectDetails>
                    <ProjectImageContainer>
                        <ProjectImageSrc src={ProjectImage1} />
                        <Overlay />
                    </ProjectImageContainer>
                </PortfolioDetailsBody>
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
                            <ProjectTitle>Pennylane Apartments</ProjectTitle>
                        </ProjectTitleContainer>
                        <ProjectDescriptionContainer>
                            <p>A website that displays contemprary African artwork by some of Africa's finest artists</p>
                            <p>Developed its frontend and backend, then deployed it.</p>
                        </ProjectDescriptionContainer>
                        <TechStackContainer>
                            <TechStack>ReactJS</TechStack>
                            <TechStack>Redux</TechStack>
                            <TechStack>Styled Components</TechStack>
                            <TechStack>Django Rest Framework</TechStack>
                            <TechStack>Heroku</TechStack>
                            <TechStack>AWS S3</TechStack>
                            <TechStack>Cloudfront</TechStack>
                        </TechStackContainer>
                        <ExternalLinkContainer>
                            <ExternalLink href="https://www.bananahillsartgallery.com/" target="_blank">
                                < ExternalLinkSvg src={ExternalLinkSrc} />
                            </ExternalLink>
                        </ExternalLinkContainer>
                    </ProjectDetails>
                </PortfolioDetailsBody>
            </PortfolioBody>
        </PortfolioSection>
    )
}

export default Portfolio
