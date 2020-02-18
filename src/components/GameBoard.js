import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const StyledBoard = styled.div`
  border-radius: 10px;
  border: 1px solid ${colors.secondaryBackground};
  overflow: hidden;
`;

const GameBoard = ({ height, width, children }) => (
  <StyledBoard style={{ height: height, width: width }}>{children}</StyledBoard>
);

export default GameBoard;
