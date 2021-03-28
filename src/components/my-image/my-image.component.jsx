import React from 'react';

import { Overlay } from '../portfolio/portfolio.styles'

import MyBioImage from '../../assets/me.jpg';


import { 
    ImageContainer,
    SquareContainer,
    ImageSrc,
    MyImageBody 
} from './my-image.styles';

const MyImage = () => {
    return (
        <ImageContainer>
           <SquareContainer />
           <MyImageBody>
                <ImageSrc src={MyBioImage} />
                <Overlay />
            </MyImageBody> 
        </ImageContainer>
    )
}

export default MyImage
