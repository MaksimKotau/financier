import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import LeftMenu from './components/LeftMenu';
import Toolbar from './components/Toolbar';
import { persistor, store } from './data/reducers';
import MainView from './views/MainView';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2e7d32"
    },
    secondary: {
      main: "#dd2c00"
    }
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
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
        </MuiPickersUtilsProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
