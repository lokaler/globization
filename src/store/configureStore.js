// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, applyMiddleware, compose } from 'redux';
import { reducer as rootReducer } from '../ducks/index';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../ducks', () => {
      const nextReducer = require('../ducks/index').reducer;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
