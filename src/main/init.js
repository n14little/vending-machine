import all from './reducers/all';
import App from './App';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const Init = (props) => {
  const store = createStore(all.reduce);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Init;
