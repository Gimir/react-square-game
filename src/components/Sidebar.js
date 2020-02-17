import React from 'react';
import styled from 'styled-components';

const StyledSidebar = styled.aside`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Sidebar = ({children}) => (
    <StyledSidebar>
        {children}
    </StyledSidebar>
);

export default Sidebar;