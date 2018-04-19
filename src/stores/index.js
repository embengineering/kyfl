import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import initialState from '../utils/initialState';
import { createLogger } from 'redux-logger';

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const logger = createLogger();
  middlewares.push(logger);
}

export default applyMiddleware(...middlewares)(createStore)(rootReducer, initialState);
