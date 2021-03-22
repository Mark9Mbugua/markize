import React from 'react';

import { 
    FooterContainer,
    FooterBody,
    FooterInfo
 } from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterBody>
                <FooterInfo>
                    &copy;{new Date().getFullYear()} Mark Mbugua - All Rights
                    Reserved
                </FooterInfo>
            </FooterBody>
        </FooterContainer>
    )
}

export default Footer
