import styled from 'styled-components';

export const ImageContainer = styled.div`
    position: relative;
    margin-top: -300px;
    margin-left: 100px;
    width: 60%;
`;

export const SquareContainer = styled.div`
    width: 250px;
    height: 250px;
    border: 1px solid  #ff6161;
    position: absolute;
    margin-left: 20px;
    margin-top: 20px;

`;

export const ImageSrc = styled.img`
    width: 100%;
    height: 100%;
`;

export const MyImageBody = styled.div`
    width: 250px;
    height: 250px;
    position: absolute;
    overflow: hidden;
    z-index: 10;
    margin-bottom: auto;
`;