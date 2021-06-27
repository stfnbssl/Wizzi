/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\store\createRedux.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import isEqual from 'lodash/isEqual';
import {createStore, combineReducers} from 'redux';
export function viewer(state: any = null, action: any) {

    switch (action.type) {
        case 'UPDATE_VIEWER': {
            return isEqual(state, action.viewer) ? state : action.viewer;
        }
        default: {
            return state;
        }
    }
}
export default function createStoreWithPreloadedState(state: any) {
    
        return createStore(combineReducers({
                viewer
             }), state);
    }