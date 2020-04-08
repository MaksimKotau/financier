import { Dialog, List, ListItemText, MenuItem, CardHeader, useTheme, ListItemIcon, ListSubheader, makeStyles, Theme, createStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../../data/actions/dashboardActions';
import { widgetDefinitions, WidgetType, WidgetCategory } from './widgets/widgetDefinitions';
import _ from 'lodash';

interface OwnProps {
    isOpen: boolean;
    onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            height: 480
        },
        innerContainer: {
            height: 400,
            overflowY: "auto"
        },
        subHeader: {
            width: "100%",
            color: theme.palette.secondary.main
        }
    }),
);

const WidgetChooser: React.FC<OwnProps> = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    const allWidgets = _.groupBy(widgetDefinitions, 'widgetCategory');
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
            <div className={classes.container}>
                <List>
                    <CardHeader title="Select a widget" style={{ color: theme.palette.primary.main, textAlign: "center" }} />
                    <div className={classes.innerContainer}>
                        {Object.keys(allWidgets).map(category => {
                            return (
                                <React.Fragment key={category}>
                                    <ListSubheader>
                                        <Paper className={classes.subHeader} elevation={0}>
                                            <Typography variant="h6">
                                                {WidgetCategory[category as WidgetCategory]}
                                            </Typography>
                                        </Paper>
                                    </ListSubheader>
                                    {allWidgets[category].map((el, i) => {
                                        return (
                                            <MenuItem
                                                key={`${category}_${i}`}
                                                itemID={el.widgetType.toString()}
                                                onClick={(event: any) => onClick(event, el.widgetType)}
                                            >
                                                <ListItemIcon>
                                                    {el.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={el.title}
                                                    secondary={el.description}

                                                />
                                            </MenuItem>
                                        )
                                    })}
                                </React.Fragment>
                            )
                        })}
                    </div>
                </List>
            </div>
        </Dialog>
    )
}

export default WidgetChooser;