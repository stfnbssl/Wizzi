/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\store\reducers.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import {combineReducers} from 'redux';
import {StoreState} from './types';
import appReducer from '../features/app/reducer';
import packiReducer from '../features/packi/reducer';
import wizziReducer from '../features/wizzi/reducer';
export const createRootReducer = () => 
    combineReducers<StoreState>({
        app: appReducer, 
        packi: packiReducer, 
        wizzi: wizziReducer
    })
;
