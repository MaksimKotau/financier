import React from 'react';
import rootReducer, { GlobalState } from './data/reducers';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import Toolbar from './components/Toolbar';
import LeftMenu from './components/LeftMenu'

const store = createStore<GlobalState,any,null,null>(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={{display: "flex"}}>dfs
      <Toolbar />
      <LeftMenu/>
      </div>
    </Provider>
  );
}

export default App;
