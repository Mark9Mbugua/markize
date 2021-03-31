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
    FooterInfoContainer
 } from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterBody>
                <FooterIcons>
                    <SocialIconSrc src={GitHubIcon} alt='GitHub icon'/>
                    <SocialIconSrc src={LinkedInIcon} alt='LinkedIn icon'/>
                    <SocialIconSrc src={TwitterIcon} alt='Twitter icon'/>
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
