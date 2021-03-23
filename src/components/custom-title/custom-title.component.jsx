import React from 'react';
import {
    CustomTitleContainer,
    TitleDetails,
    Titleline
} from './custom-title.styles';

const CustomTitle = ({ children }) => {
    return (
        < CustomTitleContainer>
            <TitleDetails>{children}</TitleDetails>
            <Titleline />
        </ CustomTitleContainer>
    )
}

export default CustomTitle
