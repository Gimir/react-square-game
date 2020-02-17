import React from 'react';
import styled from 'styled-components';

import InfoField from './InfoField';

const StyledWrapper = styled.div`
    width: 350px;
`;

const WinnersList = ({winners}) => (
    <StyledWrapper>
        {
            winners.map(field => (
                <InfoField winner={field.winner} date={field.date} key={field.id} />
            ))
        }
    </StyledWrapper>
);

export default WinnersList;