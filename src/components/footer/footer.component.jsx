import React from 'react';

import LinkedInIcon from '../../assets/linkedin-logo.svg';
import TwitterIcon from '../../assets/twitter-logo.svg';
import GitHubIcon from '../../assets/github-logo.svg';

import { 
    FooterContainer,
    FooterBody,
    FooterInfo,
    FooterIcons,
    SocialIconSrc,
    FooterInfoContainer,
    SocialLink
 } from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterBody>
                <FooterIcons>
                    <SocialLink href="https://github.com/Mark9Mbugua" target="_blank">
                        <SocialIconSrc src={GitHubIcon} alt='GitHub icon'/>
                    </SocialLink>
                    <SocialLink href="https://www.linkedin.com/in/mark-mbugua-7a73b2a0/" target="_blank">
                        <SocialIconSrc src={LinkedInIcon} alt='LinkedIn icon'/>
                    </SocialLink>
                    <SocialLink href="https://twitter.com/mark_mbugua" target="_blank">
                        <SocialIconSrc src={TwitterIcon} alt='Twitter icon'/>
                    </SocialLink>
                </FooterIcons>
                <FooterInfoContainer>
                    <FooterInfo>
                        &copy; Mark Mbugua {new Date().getFullYear()}. All Rights
                        Reserved
                    </FooterInfo>
                </FooterInfoContainer>
            </FooterBody>
        </FooterContainer>
    )
}

export default Footer
