import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Switch} from "react-router"
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux";
import {Store} from "./store"


ReactDOM.render(
    <Provider store={Store}>
        <Router>
            <Switch>
                <App />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);


