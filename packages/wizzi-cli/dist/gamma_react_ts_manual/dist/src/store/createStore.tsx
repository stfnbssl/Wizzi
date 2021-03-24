/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\store\createStore.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {StoreState} from './types';
import {createRootReducer} from './reducers';
import {createRootSaga} from './sagas';
export default // Hot reloading
    function createStoreWithPreloadedState(preloadedState: StoreState) {
        const composeEnhancer: typeof compose = (window as any)
            .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(createRootReducer, preloadedState, composeEnhancer(applyMiddleware(sagaMiddleware)));
        let sagaTask = sagaMiddleware.run(createRootSaga);
        if (module.hot) {
            const newCreateRootReducer = require('./reducers');
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('./reducers', () => 
                store.replaceReducer(newCreateRootReducer)
            )
            // Enable Webpack hot module replacement for sagas
            module.hot.accept('./sagas', // FIXME https://github.com/GuillaumeCisco/redux-sagas-injector/blob/master/src/redux-sagas-injector.js
            () => {
                const newCreateRootSaga = require('./sagas');
                sagaTask.cancel();
                sagaTask = sagaMiddleware.run(newCreateRootSaga);
            }
            )
        }
        return store;
    }
