import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import { WidgetType } from './widgetDefinitions';


interface OwnProps {
    id: string;
    type: WidgetType;
    render: () => JSX.Element;
}

const CardBase: React.FC<OwnProps> = (props) => {
    return (
        <div style={{ position: 'relative', height: '100%', width: "100%" }}>
            <Card style={{ height: '100%', width: "100%" }}>
                <CardContent style={{ height: "calc(100% - 24px - 16px)" }}>
                    {props.render()}
                </CardContent>
            </Card>
        </div>
    )
}

export default CardBase;