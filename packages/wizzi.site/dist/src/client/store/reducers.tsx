/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\store\reducers.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:12 GMT
*/
import {combineReducers} from 'redux';
import {StoreState} from './types';
import appReducer from '../features/app/reducer';
import packiReducer from '../features/packi/reducer';
import wizziReducer from '../features/wizzi/reducer';
import {viewer, splitTestSettings} from './createRedux';
export const createRootReducer = () => 

    combineReducers<StoreState>({
        app: appReducer, 
        packi: packiReducer, 
        wizzi: wizziReducer, 
        viewer, 
        splitTestSettings
     })
;
