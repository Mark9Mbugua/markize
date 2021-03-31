import styled from 'styled-components';

export const FooterContainer = styled.div`
    min-height: 20%;
    bottom: 0;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* border: 1px solid red; */
`;


export const FooterBody = styled.div`
    width: 75%; 
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid white;  */
`;

export const FooterIcons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 20%; 
    /* border: 1px solid white; */
    margin-bottom: 50px; 
`;

export const FooterInfoContainer = styled.div`
    text-align: center;
`;

export const FooterInfo = styled.p`
    font-size: 20px;
    color:#9396a3;
    letter-spacing: 3px;
`;


export const SocialIconSrc = styled.img`
    height: 30px;
    width: 30px;
    cursor: pointer;

    &:hover {
        color:#ff6161;
    }
`;