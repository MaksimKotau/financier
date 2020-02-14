import React from 'react';
import rootReducer, { GlobalState } from './data/reducers';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import Toolbar from './components/Toolbar';

const store = createStore<GlobalState,any,null,null>(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>dfs
      <Toolbar />
      </div>
    </Provider>
  );
}

export default App;
