import React from 'react';

import { Overlay } from '../portfolio/portfolio.styles'

import MyBioImage from '../../assets/me.jpg';


import { 
    ImageContainer,
    SquareContainer,
    ImageSrc,
    MyImageBody,
    GithubLink 
} from './my-image.styles';

const MyImage = () => {
    return (
        <ImageContainer>
            <GithubLink
                className='github-link' 
                href="https://github.com/Mark9Mbugua" target="_blank"
            >
                <SquareContainer className='square-container' />
                <MyImageBody>
                    <ImageSrc src={MyBioImage} />
                    <Overlay />
                </MyImageBody>
            </GithubLink> 
        </ImageContainer>
    )
}

export default MyImage
