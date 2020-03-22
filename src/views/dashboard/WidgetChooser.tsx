import React from 'react';
import { Dialog, ListItem, List, ListItemText, MenuItem } from '@material-ui/core';
import { widgetDefinitions, WidgetType } from './widgets/widgetDefinitions';
import { useDispatch } from 'react-redux';
import { addWidget } from '../../data/actions/dashboardActions';

interface OwnProps {
    isOpen: boolean;
    onClose: () => void;
}

const WidgetChooser: React.FC<OwnProps> = (props) => {
    const allWidgets = widgetDefinitions;
    const dispatch = useDispatch();
    const onClick = (event: any, index: WidgetType) => {
        addWidget(index)(dispatch);
        props.onClose();
    }
    return (
        <Dialog
            open={props.isOpen}
            onClose={props.onClose}
        >
            <List>
                {allWidgets.map((el, i) => {
                    return (
                        <MenuItem
                            key={i}
                            itemID={el.widgetType.toString()}
                            onClick={(event: any) => onClick(event, el.widgetType)}
                        >
                            <ListItemText
                                primary={el.title}
                                secondary={el.description}

                            />
                        </MenuItem>
                    )
                })}
            </List>
        </Dialog>
    )
}

export default WidgetChooser;