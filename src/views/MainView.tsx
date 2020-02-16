import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import AccountView from './AccountView';
import CategoryView from './CategoryView';
import TransactionsView from './TransactionsView';

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    main: {
        flex: 1,
        width: "100%"
    }
  }),
);

const MainView: React.FC = () => {
    const classes = useStyles();
    return (
        <main className={classes.main}>
            <div className={classes.toolbar} />
            <Switch>
            <Route path="/accounts">
              <AccountView />
            </Route>
            <Route path="/categories">
              <CategoryView />
            </Route>
            <Route path="/transactions">
              <TransactionsView />
            </Route>
          </Switch>
        </main>
    )
}

export default MainView;