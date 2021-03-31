import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 45px;
    padding: 0 25px 0 25px;
    margin: 0;
    font-size: 15px;
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    color: #ff6161;
    border: 1px solid #ff6161;

    &:hover {
        color:#9396a3;
        border: 1px solid #9396a3;
    }

    &:focus {
        color:#9396a3;
        border: 1px solid #9396a3;
    }
`;