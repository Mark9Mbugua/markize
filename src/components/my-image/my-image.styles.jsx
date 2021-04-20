import styled from 'styled-components';
import { ExternalImageLink } from '../portfolio/portfolio.styles';

export const ImageContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        margin-top: 3.8rem;
    }

    @media screen and (max-width: 480px) {
        margin-top: 2rem;
    }
`;

export const GithubLink = styled(ExternalImageLink)`
    cursor: pointer;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 18.1rem;
    height: 18.1rem;

    &:hover .square-container {
        margin-left: 2rem;
        margin-top: 2rem;
    }

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 16rem;
        height: 16rem;

        &:hover .square-container {
            margin-left: 1.5rem;
            margin-top: 1.5rem;
        }
    }

    @media screen and (max-width: 480px) {
        width: 12.65rem;
        height: 12.65rem;

        &:hover .square-container {
            margin-left: 1rem;
            margin-top: 1rem;
        }
    }

    @media screen and (max-width: 320px) {
        width: 11.2rem;
        height: 11.2rem;

        &:hover .square-container {
            margin-left: 0.8rem;
            margin-top: 0.8rem;
        }
    }
`;

export const SquareContainer = styled.div`
    width: 15.6rem;
    height: 15.6rem;
    border: 1px solid  #ff6161;
    position: relative;
    margin-left: 2.5rem;
    margin-top: 2.5rem;
    z-index: 1;
    transition: 0.2s;
    
    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 14rem;
        height: 14rem;
        margin-left: 2rem;
        margin-top: 2rem;
    }

    @media screen and (max-width: 480px) {
        width: 11.25rem;
        height: 11.25rem;
        margin-left: 1.4rem;
        margin-top: 1.4rem;
    }

    @media screen and (max-width: 320px) {
        width: 10rem;
        height: 10rem;
        margin-left: 1.2rem;
        margin-top: 1.2rem;
    }

`;

export const ImageSrc = styled.img`
    width: 100%;
    height: 100%;
`;

export const MyImageBody = styled.div`
    width: 15.6rem;
    height: 15.6rem;
    position: absolute;
    overflow: hidden;
    z-index: 10;

    @media screen 
    and (min-width: 480px)
    and (max-width: 768px) {
        width: 14rem;
        height: 14rem;
        margin-left: 0;
        margin-top: 0;
    }

    @media screen and (max-width: 480px) {
        width: 11.25rem;
        height: 11.25rem;
        margin-left: 0;
        margin-top: 0;
    }

    @media screen and (max-width: 320px) {
        width: 10rem;
        height: 10rem;
    }
`;