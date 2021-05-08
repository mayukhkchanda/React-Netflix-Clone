import React from "react";
import { render } from "react-dom";
import App from "./App";
import { reducers } from "./reducers";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const __rootEl = document.getElementById("root");

render(
  <Provider store={createStore(reducers, composeEnhancer(applyMiddleware()))}>
    <App />
  </Provider>,

  __rootEl
);
