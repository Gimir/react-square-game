import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledBox = styled.div`
    height: 100%;
    border: 1px solid ${colors.secondaryText};
`;

const GameBox = ({
    width
}) => (
    <StyledBox 
        className="game-box"
        style={{width: `${width}%`}}
    >

    </StyledBox>
);

export default GameBox;