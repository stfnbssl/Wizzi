/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\store\index.ts.ittf
    utc time: Fri, 21 May 2021 20:28:08 GMT
*/
import {createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware as createRouterMiddleware} from 'connected-react-router';
import {composeEnhancers} from './utils';
import rootReducer from './root-reducer';
import {ResponsePayload} from './types';

export const history = createBrowserHistory();
    // browser history
    
export type {ResponsePayload};

const routerMiddleware = createRouterMiddleware(history);


// configure middlewares
const middlewares = [
    routerMiddleware
];


// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));


// rehydrate state on app start
const initialState = {};


// create store
const store = createStore(rootReducer(history), initialState, enhancer);

export default store;
