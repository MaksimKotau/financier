import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import LeftMenu from './components/LeftMenu';
import Toolbar from './components/Toolbar';
import rootReducer, { GlobalState } from './data/reducers';
import MainView from './views/MainView'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as Colors from '@material-ui/core/colors';
const store = createStore<GlobalState, any, null, null>(rootReducer);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#558b2f"
    },
    secondary: {
      main: "#ff8f00"
    }
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider
      theme={theme}
    >
      <Router>
        <div style={{ display: "flex", width: "100%" }}>
          <Toolbar />
          <LeftMenu />
          <MainView />
        </div>
      </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
