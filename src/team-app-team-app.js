import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import { createStore } from "redux";
import allReducers from "./data/reducers";
import { Provider } from "react-redux";

import configureStore from "./config/configureStore";

// export const store = createStore(allReducers);
const store = configureStore();

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  // rootComponent: Root,
  loadRootComponent: (props) =>
    new Promise((resolve, reject) =>
      resolve(() => (
        <Provider store={store}>
          <Root props={props} />
        </Provider>
      ))
    ),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
