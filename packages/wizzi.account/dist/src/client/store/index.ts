/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\store\index.ts.ittf
    utc time: Tue, 25 May 2021 15:10:46 GMT
*/
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware as createRouterMiddleware} from 'connected-react-router';
import {composeEnhancers} from './utils';
import rootReducer from './root-reducer';
import {createRootSaga} from './root-saga';
import {ResponsePayload} from './types';

export const history = createBrowserHistory();
    // browser history
    
export type {ResponsePayload};
const sagaMiddleware = createSagaMiddleware();

const routerMiddleware = createRouterMiddleware(history);


// configure middlewares
const middlewares = [
    sagaMiddleware, 
    routerMiddleware
];


// compose enhancers
const enhancer = composeEnhancers(applyMiddleware(...middlewares));


// rehydrate state on app start
const initialState = {};


// create store
const store = createStore(rootReducer(history), initialState, enhancer);
let sagaTask = sagaMiddleware.run(createRootSaga());

export default store;
