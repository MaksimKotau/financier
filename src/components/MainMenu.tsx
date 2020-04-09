import React, { useState } from 'react';
import { Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogContentText, Typography, makeStyles, Theme, createStyles, ListItemIcon, ListItemText } from '@material-ui/core';
import Info from '@material-ui/icons/Info';

interface OwnProps {
    anchorEl: HTMLElement | null;
    onClose: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        version: {
            marginTop: 15
        },
    })
);

const MainMenu: React.FC<OwnProps> = (props) => {
    const [showAbout, setShowAbout] = useState<boolean>(false)
    const classes = useStyles();
    const onClickMenuAbout = () => {
        props.onClose();
        setShowAbout(true);
    }
    const onCloseAboutDialog = () => {
        setShowAbout(false);
    }
    return (
        <>
            <Menu
                anchorEl={props.anchorEl}
                open={Boolean(props.anchorEl)}
                onClose={props.onClose}
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
                <MenuItem onClick={onClickMenuAbout}>
                    <ListItemIcon>
                        <Info color="action" />
                    </ListItemIcon>
                    <ListItemText>
                        About
                    </ListItemText>
                </MenuItem>

            </Menu>
            <Dialog
                open={showAbout}
                onClose={onCloseAboutDialog}
            >
                <DialogTitle>
                    Application Financier
            </DialogTitle>
                <DialogContent>
                    <DialogContentText component="div">
                        <Typography variant="subtitle1">
                            {`This is a beta version of the Financier app. At the moment, 
                            its functionality is limited and you cannot use it to track 
                            your finances. All data is stored only in the local storage 
                            of your browser.`}
                        </Typography>
                        <Typography variant="h6" className={classes.version}>
                            {`v. ${process.env.REACT_APP_APPLICATION_VERSION}`}
                        </Typography>
                    </DialogContentText>
                </DialogContent>
            </Dialog>

        </>
    );
}

export default MainMenu;