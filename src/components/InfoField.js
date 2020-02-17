import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

import PlainText from './PlainText';

const StyledDiv = styled.div`
    width: 100%;
    height: 50px;
    background-color: ${colors.primaryBackground};
    border-radius: 5px;
    padding: 0 10px;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p {
        margin: 0;
    }
`;

const InfoField = ({
    winner,
    date
}) => (
    <StyledDiv>
        <PlainText>{winner}</PlainText>
        <PlainText>{date}</PlainText>
    </StyledDiv>
);

export default InfoField;