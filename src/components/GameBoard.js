import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledBoard = styled.div`
    width: 70%;
    border-radius: 10px;
    border: 1px solid ${colors.secondaryText};
    overflow: hidden;
`;

const GameBoard = ({height, children}) => (
    <StyledBoard style={{height: height}}>
        {children}
    </StyledBoard>
);

export default GameBoard;