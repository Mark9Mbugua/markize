import styled from 'styled-components';

export const HeaderContainer = styled.div`
    top: ${props => props.visible ? '0': '-100px'};
    width: 100%;
    position: fixed;
    z-index: 100;
    transition: top 0.6s;

    @media screen and (max-width: 480px) {
        display: flex;
        justify-items: space-between;
    }
`;