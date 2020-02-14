import React from 'react';
import rootReducer, { GlobalState } from './data/reducers';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const store = createStore<GlobalState,any,null,null>(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <h2>Application for home finance</h2>
    </Provider>
  );
}

export default App;
