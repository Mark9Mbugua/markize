import styled from 'styled-components';

export const FooterContainer = styled.div`
    min-height: 10%;
    bottom: 0;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;


export const FooterBody = styled.div`
    width: 33%; 
    padding-bottom: 10px;
    /* border: 1px solid yellow; */
    display: flex;
    justify-content: center;
    align-items: center; 
`;

export const FooterInfo = styled.p`
    font-size: 20px;
    font-family: 'Dancing Script', cursive;
`;