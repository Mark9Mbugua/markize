import React from 'react';

import ProjectImage1 from '../../assets/bhag.jpg';
import ProjectImage2 from '../../assets/beach-resort.jpg';
import ProjectImage3 from '../../assets/pennylane.jpg';
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
    ProjectTitle,
    ProjectDescriptionContainer,
    Overlay,
    TechStackContainer,
    TechStack,
    ExternalLinkContainer,
    ExternalLink,
    ExternalLinkSvg,
    ProjectTypeInvertedContainer,
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
                        <ProjectTypeContainer>
                            <ProjectTitle>Banana Hill Art Gallery</ProjectTitle>
                        </ProjectTypeContainer>
                        <ProjectDescriptionContainer>
                            <p>A website that displays contemprary African artwork by some of Africa's finest artists</p>
                            <p>Developed its frontend and backend, then deployed it.</p>
                        </ProjectDescriptionContainer>
                        <TechStackContainer>
                            <TechStack>Django Rest Framework</TechStack>
                            <TechStack>ReactJS</TechStack>
                            <TechStack>Redux</TechStack>
                            <TechStack>Cloudfront</TechStack>
                            <TechStack>Heroku</TechStack>
                            <TechStack>AWS S3</TechStack>
                            <TechStack>Styled Components</TechStack>
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
                            <ProjectType>Client Project</ProjectType>
                        </ProjectTypeInvertedContainer>
                        <ProjectTypeInvertedContainer>
                            <ProjectTitle>Pennylane Apartments</ProjectTitle>
                        </ProjectTypeInvertedContainer>
                        <ProjectDescriptionInvertedContainer>
                            <p>Pennylane Apartments located at Banana Hill in Kiambu County, Kenya.</p>
                        </ProjectDescriptionInvertedContainer>
                        <TechStackContainer>
                            <TechStack>ReactJS</TechStack>
                            <TechStack>CSS</TechStack>
                            <TechStack>GSAP Animations</TechStack>
                        </TechStackContainer>
                        <ExternalLinkContainer>
                            < ExternalLinkInverted href="https://pennylane.netlify.app/" target="_blank">
                                < ExternalLinkSvg src={ExternalLinkSrc} />
                            </ ExternalLinkInverted>
                        </ExternalLinkContainer>
                    </ProjectDetails>
                    <ProjectImageContainer>
                        <ProjectImageSrc src={ProjectImage3} />
                        <Overlay />
                    </ProjectImageContainer>
                </PortfolioDetailsBody>
                <PortfolioDetailsBody>
                    <ProjectImageContainer>
                        <ProjectImageSrc src={ProjectImage2} />
                        <Overlay />
                    </ProjectImageContainer>
                    <ProjectDetails>
                        <ProjectTypeContainer>
                            <ProjectType>Practice Project</ProjectType>
                        </ProjectTypeContainer>
                        <ProjectTypeContainer>
                            <ProjectTitle>Beach Resort</ProjectTitle>
                        </ProjectTypeContainer>
                        <ProjectDescriptionContainer>
                            <p>A practice project meant to test and level up my Context API, 
                            Contentful, CSS, basic searching and filtering skills.</p>
                        </ProjectDescriptionContainer>
                        <TechStackContainer>
                            <TechStack>ReactJS</TechStack>
                            <TechStack>Context API</TechStack>
                            <TechStack>CSS</TechStack>
                            <TechStack>Contentful</TechStack>
                        </TechStackContainer>
                        <ExternalLinkContainer>
                            <ExternalLink href="https://react-beach-resort-rooms.netlify.com/" target="_blank">
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
