import { combineReducers } from 'redux';
import {
  FETCH_INFO_REQUEST, FETCH_INFO_SUCCESS
} from '../actions/actions';

function info(state = {
  isFetching: false,
  info: {}
}, action) {
  switch (action.type) {
  case FETCH_INFO_REQUEST:
    return Object.assign({}, state, {
      isFetching: true
    });
  case FETCH_INFO_SUCCESS:
    return Object.assign({}, state, {
      isFetching: false,
      info: action.res.data,
      lastUpdated: action.receivedAt
    });
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  info
});

export default rootReducer;
