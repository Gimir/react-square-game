import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledButton = styled.button`
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: ${colors.buttonBackground};
    color: ${colors.buttonTextColor};
    line-height: 50px;
    padding: 0 25px;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.2s;
    font-size: 20px;
    font-weight: 700;

    &:hover {
        opacity: 0.8;
    }
    &:disabled:hover {
        opacity: 1;
        cursor: default;
    }
`;

const DefaultButton = ({
    children,
    onClick,
    disabled
}) => (
    <StyledButton 
        onClick={onClick}
        disabled={disabled}    
    >
        {children}
    </StyledButton>
);

export default DefaultButton;