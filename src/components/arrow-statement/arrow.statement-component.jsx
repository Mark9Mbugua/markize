import React from 'react';
import rightArrow from '../../assets/right-arrow.svg';

import { 
    ArrowStatementContainer,
    ArrowIcon 
} from './arrow-statement.styles';

const ArrowStatement = ({ children }) => {
    return (
        <ArrowStatementContainer>
            <ArrowIcon src={rightArrow} />
            {children}
        </ArrowStatementContainer>
    )
}

export default ArrowStatement
