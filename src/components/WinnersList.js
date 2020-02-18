import React from 'react';
import styled from 'styled-components';

import { cutLargeString } from '../helpers/';

import InfoField from './InfoField';

const StyledWrapper = styled.div`
  width: 90%;
  padding: 20px 0;
`;

const WinnersList = ({ winners }) => (
  <StyledWrapper>
    {winners.map(field => (
      <InfoField winner={cutLargeString(field.winner)} date={field.date} key={field.id} />
    ))}
  </StyledWrapper>
);

export default WinnersList;
