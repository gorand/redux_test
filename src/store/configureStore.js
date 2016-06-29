import { compose, createStore } from 'redux';
import rootReducer from '../reducers';

import persistState from 'redux-localstorage';

export default function configureStore(initialState) {
  const createPersistentStore = compose(
    persistState()
  )(createStore);

  const store = createPersistentStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
