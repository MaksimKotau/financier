import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Typography, makeStyles, Theme, createStyles, Toolbar, IconButton } from '@material-ui/core';
import Logo from '@material-ui/icons/AccountBalanceWallet';
import MenuIcon from '@material-ui/icons/Menu';
import MainMenu from './MainMenu'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            flex: 1,
            display: "flex",
            flexDirection: "row",
            zIndex: theme.zIndex.drawer + 1,
        },
        logoConatiner: {
            marginRight: 20,
            backgroundColor: theme.palette.background.paper,
            borderRadius: 25,
            width: 50,
            height: 50
        },
        logo: {
            margin: 8
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
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const onClose = () => {
        setAnchorEl(null);
    }
    const openMenu = (e: any) => {
        setAnchorEl(e.currentTarget)
    } 
    return (
        <>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.logoConatiner}>
                        <Logo color="primary" fontSize="large" className={classes.logo} />
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
                            onClick={openMenu}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <MainMenu
                anchorEl={anchorEl}
                onClose={onClose}
            />
        </>
    )
}

export default AppToolbar;