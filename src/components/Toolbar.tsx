import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography, makeStyles, Theme, createStyles, Toolbar, IconButton } from '@material-ui/core';
import Logo from '../assets/financierIcon.png';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            flex: 1,
            display: "flex",
            flexDirection: "row",
            zIndex: theme.zIndex.drawer + 1,
        },
        imageConatiner: {
            marginRight: 20
        },
        image: {
            backgroundColor: theme.palette.background.paper,
            height: 50,
            width: 50,
            borderRadius: 26,
            paddingLeft: 3
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        menuContainer: {
            display: "flex",
        },
        title: {
            flex: 1
        },
        toolbar: {
            display: "flex",
            flex: 1,
            paddingRight: 0
        }
    }),
);

const AppToolbar: React.FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <div className={classes.imageConatiner}>
                    <img src={Logo} alt="Financier logo" className={classes.image} />
                </div>
                <div className={classes.title}>
                    <Typography variant="h6" noWrap>
                        Financier
                    </Typography>
                </div>
                <div className={classes.menuContainer}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default AppToolbar;