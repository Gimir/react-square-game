import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledDiv = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${colors.primaryBackground};
    border-radius: 5px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: ${colors.secondaryText};
    font-size: 20px;
`;

const InfoField = ({
    winner,
    date
}) => (
    <StyledDiv>
        <p>{winner}</p>
        <p>{date}</p>
    </StyledDiv>
);

export default InfoField;