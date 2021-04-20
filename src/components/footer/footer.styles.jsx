import styled from 'styled-components';

export const FooterContainer = styled.div`
    min-height: 20%;
    bottom: 0;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow-x: hidden;
    margin-top: 10rem;
`;


export const FooterBody = styled.div`
    width: 75%; 
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 480px) {
        justify-content: space-around;
        width: 90%; 
    }
`;

export const FooterIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%; 
    margin-bottom: 50px;
    
    @media screen and (max-width: 480px) {
        width: 45%;
        justify-content: center;
        margin-bottom: unset;
        margin-bottom: 15px; 
    }
`;

export const FooterInfoContainer = styled.div`
    text-align: center;
`;

export const FooterInfo = styled.p`
    font-size: 20px;
    color:#9396a3;
    letter-spacing: 3px;

    @media screen and (max-width: 480px) {
        font-size: 14px;
        letter-spacing: 1px;
    }
`;


export const SocialIconSrc = styled.img`
    height: 30px;
    width: 30px;

    @media screen and (max-width: 480px) {
        height: 20px;
        width: 30px;
    }
`;

export const SocialLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`;