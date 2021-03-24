import React from 'react';
import { 
    PortfolioSection,
    PortfolioBody,
    PortfolioDetails
} from '../portfolio/portfolio.styles';

const Portfolio = () => {
    return (
        <PortfolioSection id='portfolio'>
            <PortfolioBody>
                <PortfolioDetails>
                    <div>
                        <h1> Project Image</h1>
                    </div>
                    <div>
                        <h1>Project Details</h1>
                    </div>
                </PortfolioDetails>
            </PortfolioBody>
        </PortfolioSection>
    )
}

export default Portfolio
