import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './styles/styles.scss';

render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('app')
);


if (module.hot) {
  module.hot.accept('./App.js', () => {
    const NewApp = require('./App').default;
    render(
      <Provider store={store}>
        <NewApp />
      </Provider>,
      document.getElementById('app')
    );
  });
}
