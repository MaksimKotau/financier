import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography, makeStyles, Theme, createStyles, Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            flex: 1,
            display: "flex",
            flexDirection: "row",
            zIndex: theme.zIndex.drawer + 1,
        }
    }),
);

const AppToolbar: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Financier
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default AppToolbar;