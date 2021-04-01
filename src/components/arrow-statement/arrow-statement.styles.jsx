import styled from 'styled-components';

export const ArrowStatementContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 480px) {
        align-items: flex-start;    
    }
`;

export const ArrowIcon = styled.img`
    width: 25px;
    height: 25px;
    margin: 0;

    @media screen and (max-width: 480px) {
        margin-top: 8px; 
    }
`;