import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledTitle = styled.h2`
    font-size: 30px;
    color: ${colors.primaryText};
    text-align: center;
    text-transform: capitalise;
    font-weight: 600;
`;

const Title = ({children}) => (
    <StyledTitle>
        {children}
    </StyledTitle>
);

export default Title;