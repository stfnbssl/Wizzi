/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\store\createStore.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:12 GMT
*/
import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {StoreState} from './types';
import {createRootReducer} from './reducers';
import {createRootSaga} from './sagas';

export default function createStoreWithPreloadedState(preloadedState: StoreState) {
    
        console.log('createStoreWithPreloadedState', 'preloadedState', preloadedState);
        const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(createRootReducer(), preloadedState, composeEnhancer(applyMiddleware(sagaMiddleware)));
        
        // Hot reloading
        let sagaTask = sagaMiddleware.run(createRootSaga());
        
        // Hot reloading
        if (module.hot) {
            const newCreateRootReducer = require('./reducers');
            // Enable Webpack hot module replacement for reducers
            module.hot.accept('./reducers', () => 
            
                store.replaceReducer(newCreateRootReducer())
            )
            // Enable Webpack hot module replacement for sagas
            module.hot.accept('./sagas', () => {
            
                const newCreateRootSaga = require('./sagas');
                // FIXME https://github.com/GuillaumeCisco/redux-sagas-injector/blob/master/src/redux-sagas-injector.js
                sagaTask.cancel();
                
                // FIXME https://github.com/GuillaumeCisco/redux-sagas-injector/blob/master/src/redux-sagas-injector.js
                sagaTask = sagaMiddleware.run(newCreateRootSaga());
            }
            )
        }
        return store;
    }
