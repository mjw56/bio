import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from '../reducers/reducers';
import promiseMiddleware from '../middlewares/promiseMiddleware'

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
