import { Card, CardContent, IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import { WidgetType } from './widgetDefinitions';
import MenuIcon from '@material-ui/icons/MoreVert';
import WidgetMenu from './WidgetMenu';


interface OwnProps {
    id: string;
    type: WidgetType;
    render: () => JSX.Element;
}

const CardBase: React.FC<OwnProps> = (props) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const onClose = () => setAnchorEl(null);
    const onOpen = (e: any) => setAnchorEl(e.currentTarget) 
    return (
        <div style={{ position: 'relative', height: '100%', width: "100%" }}>
            <IconButton style={{position: "absolute", top: 5, right: 5}} onClick={onOpen}>
                <MenuIcon />
            </IconButton>
            <WidgetMenu
                anchorEl={anchorEl}
                onClose={onClose}
                id={props.id}
            />
            <Card style={{ height: '100%', width: "100%" }}>
                <CardContent style={{ height: "calc(100% - 40px)" }}>
                    {props.render()}
                </CardContent>
            </Card>
        </div>
    )
}

export default CardBase;