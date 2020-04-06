import { Card, CardContent, IconButton, CardHeader, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { WidgetType, getWidgetParams } from './widgetDefinitions';
import MenuIcon from '@material-ui/icons/MoreVert';
import WidgetMenu from './WidgetMenu';


interface OwnProps {
    id: string;
    type: WidgetType;
    render: () => JSX.Element;
}

const CardBase: React.FC<OwnProps> = (props) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const onClose = () => setAnchorEl(null);
    const onOpen = (e: any) => setAnchorEl(e.currentTarget)
    const widgetParams = getWidgetParams(props.type);
    return (
        <div style={{ position: 'relative', height: '100%', width: "100%" }}>
            <IconButton style={{ position: "absolute", top: 0, right: 0 }} onClick={onOpen}>
                <MenuIcon />
            </IconButton>
            <WidgetMenu
                anchorEl={anchorEl}
                onClose={onClose}
                id={props.id}
            />
            <Card style={{ height: '100%', width: "100%" }}>
                <CardHeader title={widgetParams?.title} style={{color: theme.palette.primary.main}}/>
                <CardContent style={{ height: "calc(100% - 90px)" }}>
                    {props.render()}
                </CardContent>
            </Card>
        </div>
    )
}

export default CardBase;