import React from "react";
import ReactDOM from "react-dom";
import Router from "react-router";
import { createHistory } from 'history';
import routes from "./routes";
import { Provider } from 'react-redux';
import configureStore from './lib/configureStore';

const store = configureStore(window.__INITIAL_STATE__);
const history = createHistory();

console.log('howdy', window.__INITIAL_STATE__)

ReactDOM.render(
  <Provider store={store}>
      <Router children={routes} history={history} />
  </Provider>,
  document.getElementById('app')
);
