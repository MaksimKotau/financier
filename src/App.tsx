import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import LeftMenu from './components/LeftMenu';
import Toolbar from './components/Toolbar';
import rootReducer, { GlobalState } from './data/reducers';
import MainView from './views/MainView'

const store = createStore<GlobalState, any, null, null>(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ display: "flex", width: "100%" }}>
          <Toolbar />
          <LeftMenu />
          <MainView />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
