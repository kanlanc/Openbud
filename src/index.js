import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import index from "./reducers";
import injectTapEventPlugin from "react-tap-event-plugin";
import { composeWithDevTools } from "redux-devtools-extension";
import "font-awesome/css/font-awesome.min.css";
import thunk from 'redux-thunk';

injectTapEventPlugin();
const store = createStore(index,
    compose(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
