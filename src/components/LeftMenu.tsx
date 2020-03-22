import { createStyles, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from '@material-ui/core';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CategoryIcon from '@material-ui/icons/Category';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import BarChartIcon from '@material-ui/icons/BarChart';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
        toolbar: theme.mixins.toolbar,
        link: {
            whiteSpace: 'nowrap',
            color: theme.palette.text.primary,
            textDecoration: "none"
        }
    }),
);

const LeftMenu: React.FC = () => {
    const classes = useStyles();
    const location = useLocation();
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
                <Link to="/accounts" className={classes.link}>
                    <ListItem button key="Accounts" selected={location.pathname === "/accounts"}>
                        <ListItemIcon>
                            <CreditCardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Accounts"/>
                    </ListItem>
                </Link>
                <Link to="/categories"  className={classes.link}>
                    <ListItem button key="Categories" selected={location.pathname === "/categories"}>
                        <ListItemIcon>
                            <CategoryIcon />
                        </ListItemIcon>
                        <ListItemText primary="Categories" />
                    </ListItem>
                </Link>
                <Link to="/transactions"  className={classes.link}>
                    <ListItem button key="Transactions" selected={location.pathname === "/transactions"}>
                        <ListItemIcon>
                            <AttachMoneyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Transactions" />
                    </ListItem>
                </Link>
                <Link to="/analytics"  className={classes.link}>
                    <ListItem button key="Charts_Expenses" selected={location.pathname === "/analytics"}>
                        <ListItemIcon>
                            <BarChartIcon />
                        </ListItemIcon>
                        <ListItemText primary="Analytics" />
                    </ListItem>
                </Link>
            </List>
        </Drawer >
    )
}

export default LeftMenu;