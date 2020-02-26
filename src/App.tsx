import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import LeftMenu from './components/LeftMenu';
import Toolbar from './components/Toolbar';
import { persistor, store } from './data/reducers';
import MainView from './views/MainView';


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
      <PersistGate loading={null} persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
