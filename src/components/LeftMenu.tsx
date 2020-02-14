import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme, createStyles } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard'

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
          },
          
          drawer: {
            width: drawerWidth,
            flexShrink: 0,
          },
          drawerPaper: {
            width: drawerWidth,
          },
          content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
          toolbar: theme.mixins.toolbar,
    }),
);

const LeftMenu: React.FC = () => {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.toolbar} />
            <List>
                <ListItem button key="Accounts">
                    <ListItemIcon>
                        <CreditCardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Accounts" />
                </ListItem>
            </List>
        </Drawer>
    )
}

export default LeftMenu;