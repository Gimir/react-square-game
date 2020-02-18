import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const GameRow = ({ height, children }) => (
  <StyledRow style={{ height: `${height}%` }}>{children}</StyledRow>
);

export default GameRow;
