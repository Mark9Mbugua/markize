import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomButton from '../custom-button/custom-button.component';

import { 
    ContactSection,
    ContactBody,
    WhatNext,
    ContactMe,
    PartingShot,
    ContactButtonContainer,
    EmailLink 
} from './contact.styles';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    let contactSection = useRef(null);
    let contactBody = useRef(null);

    useEffect(() =>{
        const contactBodyFirst = contactBody.children[0];
        const contactBodySecond = contactBodyFirst.nextSibling;
        const contactBodyThird = contactBodySecond.nextSibling;
        const contactBodyFourth = contactBodyThird.nextSibling;

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: contactSection,
                start: 'top 50%'

            }
        });

        tl
        .from(contactBodyFirst, {opacity: 0, x: -200, duration: .4, ease: 'Power3.easeInOut', stagger: .8})
        .from([contactBodySecond, contactBodyThird, contactBodyFourth],
            {opacity: 0, y: 100, duration: .6, ease: 'Power3.easeInOut', stagger: .4})
    }, []);

    return (
        <ContactSection 
            id='contact'
            ref={el => contactSection = el}
        >
            <ContactBody ref={el => contactBody = el}>
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
                    <EmailLink href="mailto:mbuguamark@gmail.com" target="_blank">
                    <CustomButton>Say Hello</CustomButton>
                    </EmailLink>
                </ContactButtonContainer>
            </ContactBody>
        </ContactSection>
    )
}

export default Contact
