import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import AccountView from './accounts/AccountView';
import CategoryView from './categories/CategoryView';
import TransactionsView from './transactions/TransactionsView';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    main: {
      flex: 1,
      width: "100%"
    },
    mainContainer: {
      margin: 15,
      boxSizing: "border-box"
    }
  }),
);

const MainView: React.FC = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <div className={classes.toolbar} />
      <div className={classes.mainContainer}>
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
      </div>

    </main>
  )
}

export default MainView;