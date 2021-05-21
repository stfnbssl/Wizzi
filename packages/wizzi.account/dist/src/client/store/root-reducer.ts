/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\store\root-reducer.ts.ittf
    utc time: Fri, 21 May 2021 20:28:08 GMT
*/
import {combineReducers} from 'redux';
import {History} from 'history';
import {connectRouter} from 'connected-react-router';
import PostReducer from '../features/post/reducer';

const rootReducer = (history: History) => 

    combineReducers({
        router: connectRouter(history), 
        post: PostReducer
     })
;
export default rootReducer;
