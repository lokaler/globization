// This file merely configures the store for hot reloading.
// This boilerplate file is likely to be the same for each project that uses Redux.
// With Redux, the actual stores are in /reducers.

import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  let store;
  const thunkMiddleWare = applyMiddleware(thunk);
  // Enable Redux devtools if the extension is installed in developer's browser
  // @TODO:window.devToolsExtension()(createStore)(rootReducer, thunkMiddleWare, initialState)
  // is not working. The middleware is not attached to the store. I don't know why..
  if (false && window.devToolsExtension) {
    store = window.devToolsExtension()(createStore)(rootReducer, thunkMiddleWare, initialState);
  } else {
    store = createStore(rootReducer, thunkMiddleWare, initialState);
  }
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
