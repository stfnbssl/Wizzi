/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\store\reducers.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
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
