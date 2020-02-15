import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import colors from '../constants/colors';

const DropdownMenu = ({
    title,
    items,
    onItemClick
}) => (
    <DropdownButton
        id="dropdown-basic-button" 
        title={title}
    >
        {
            items.map((item, index) => (
                <Dropdown.Item 
                    as="button"
                    key={index}
                    onClick={() => onItemClick(item.mode)}
                >
                    {item.mode}
                </Dropdown.Item>
            ))
        }
    </DropdownButton>
);

export default DropdownMenu;