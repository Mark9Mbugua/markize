import React from 'react';

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
            </MyImageBody> 
        </ImageContainer>
    )
}

export default MyImage
