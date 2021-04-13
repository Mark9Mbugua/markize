import styled from 'styled-components';

export const ImageContainer = styled.div`
    position: relative;
    margin-top: -300px;
    margin-left: 100px;
    width: 60%;

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        margin-top: 60px;
        margin-left: unset;
    }

    @media screen and (max-width: 480px) {
        margin-top: 30px;
        margin-left: unset;
    }
`;

export const SquareContainer = styled.div`
    width: 250px;
    height: 250px;
    border: 1px solid  #ff6161;
    position: absolute;
    margin-left: 20px;
    margin-top: 20px;

    @media screen and (max-width: 480px) {
        /* display: inline; */
        position: relative;
        width: 180px;
        height: 180px;
        margin-left: 15px;
        margin-top: 35px;
        z-index: 1;
    }

    @media screen and (max-width: 320px) {
        width: 160px;
        height: 160px;
        margin-left: 10px;
        margin-top: 5px;
    }

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
    /* margin-bottom: auto; */

    @media screen and (max-width: 480px) {
        width: 180px;
        height: 180px;
        margin-left: 0px;
        margin-top: -200px;
    }

    @media screen and (max-width: 320px) {
        width: 160px;
        height: 160px;
        margin-top: -170px;
    }
`;