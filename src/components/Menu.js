import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Menu = ({children}) => (
    <StyledMenu>
        {children}
    </StyledMenu>
);

export default Menu;