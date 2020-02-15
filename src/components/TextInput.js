import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledInput = styled.input`
    width: 250px;
    height: 50px;
    margin: 0 20px;
    background-color: ${colors.secondaryBackground};
    border: 1px solid ${colors.secondaryBackground};
    border-radius: 5px;
    color: ${colors.primaryText};
    font-size: 20px;
    padding-left: 10px;
    line-height: 50px;
`;

const TextInput = ({
    value,
    onChange,
    placeholder,
    error
}) => (
    <StyledInput 
        type="text" 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        style={{borderColor: error ? 'red' : colors.secondaryBackground}}
    />
);

export default TextInput;