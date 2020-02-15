import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledInput = styled.input`
    width: 250px;
    height: 50px;
    background-color: ${colors.secondaryBackground};
    border: none;
    border-radius: 2px;
    color: ${colors.primaryText};
    font-size: 20px;
    padding-left: 10px;
    line-height: 50px;
`;

const TextInput = ({
    value,
    onChange
}) => (
    <StyledInput 
        type="text" 
        placeholder="Enter your name" 
        value={value}
        onChange={onChange}
    />
);

export default TextInput;