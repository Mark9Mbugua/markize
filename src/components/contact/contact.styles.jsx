import styled from 'styled-components';

export const ContactSection = styled.section`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        min-height: unset;
    }
`;

export const ContactBody = styled.div`
    display: grid;
    grid-gap: 30px;
    justify-items: center;
    align-items: center;
    width: 75%;
    margin-top: 30px;

    div {
        text-align: center;
    }

    @media screen and (max-width: 480px) {
        width: 95%;
    }
`;

export const WhatNext = styled.p`
    color:#ff6161;
    letter-spacing: 0.32rem;
    font-size: 1.6rem; 
`;

export const PartingShot = styled.p`
    color:#9396a3;
    font-size: 1.25rem; 
`;

export const ContactMe = styled.h1`
    color:#ffff;
    letter-spacing: 0.32rem;
    font-size: 3.2rem;  
`;

export const ContactButtonContainer = styled.div`
    margin-top: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const EmailLink = styled.a`
    text-decoration: none;
    cursor: pointer;
    max-width: 10.5rem;
`;