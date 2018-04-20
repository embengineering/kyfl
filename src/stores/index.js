import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import initialState from '../utils/initialState';
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(thunk)
));