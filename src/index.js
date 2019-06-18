import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Home from "./components/Home";
import { Provider } from "react-redux";

import { createMystore } from "../src/store/store";

const store = createMystore();

store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
