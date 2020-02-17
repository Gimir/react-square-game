import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
`;

const GameArea = ({children}) => (
    <StyledDiv>
        {children}
    </StyledDiv>
);

export default GameArea;