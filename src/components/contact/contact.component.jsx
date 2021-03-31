import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import { 
    ContactSection,
    ContactBody,
    WhatNext,
    ContactMe,
    PartingShot,
    ContactButtonContainer 
} from './contact.styles';

const Contact = () => {
    return (
        <ContactSection id='contact'>
            <ContactBody>
                <div>
                    <WhatNext>What's Next?</WhatNext>
                </div>
                <div>
                    <ContactMe>Get In Touch</ContactMe>
                </div>
                <div>
                    <PartingShot>
                        I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
                    </PartingShot>
                </div>
                <ContactButtonContainer>
                    <CustomButton>Say Hello</CustomButton>
                </ContactButtonContainer>
            </ContactBody>
        </ContactSection>
    )
}

export default Contact
