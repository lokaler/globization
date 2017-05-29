import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './styles/styles.css';

render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NewApp = require('./App').default;
    console.log(store.getState())
    render(
      <Provider store={store}>
        <NewApp />
      </Provider>,
      document.getElementById('app')
    );
  });
}