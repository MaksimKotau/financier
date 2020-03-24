import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { ListItemText } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {removeWidget} from '../../../data/actions/dashboardActions';

interface OwnProps {
    anchorEl: HTMLElement | null;
    onClose: () => void;
    id: string;
}

const WidgetMenu: React.FC<OwnProps> = (props) => {
    const dispatch = useDispatch();
    const deleteWidget = () => removeWidget(props.id)(dispatch);
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
            <MenuItem onClick={deleteWidget}>
                <ListItemText primary="Delete" />
            </MenuItem>
        </Menu>
    )
}

export default WidgetMenu;