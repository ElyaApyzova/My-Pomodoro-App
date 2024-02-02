import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

