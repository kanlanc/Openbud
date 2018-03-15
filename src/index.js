import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import index from "./reducers";
import injectTapEventPlugin from 'react-tap-event-plugin';  



injectTapEventPlugin();
var store=createStore(index);
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
