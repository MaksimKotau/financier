import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ListItemText } from '@material-ui/core';

interface OwnProps {
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

const WidgetMenu: React.FC<OwnProps> = (props) => {
    return (
        <Menu
            open={Boolean(props.anchorEl)}
            onClose={props.onClose}
            anchorEl={props.anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            getContentAnchorEl={null}
        >
            <MenuItem>
                <ListItemText primary="Delete" />
            </MenuItem>
        </Menu>
    )
}

export default WidgetMenu;