/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
// import decode from 'jwt-decode'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import "semantic-ui-css/semantic.min.css";
import {userLoggedIn} from "./actions/auth";

import App from './App';
// import serviceWorker from './serviceWorker';

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
);
if(localStorage.surfJWT){
    // const payload = decode(localStorage.iotJWT);
    const user = {token: localStorage.surfJWT};
    store.dispatch(userLoggedIn(user));
}
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
