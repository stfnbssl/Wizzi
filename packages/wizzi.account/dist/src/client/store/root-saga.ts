/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\store\root-saga.ts.ittf
    utc time: Tue, 25 May 2021 15:10:46 GMT
*/
import {all, fork} from 'redux-saga/effects';
import PostSagas from '../features/post/saga';

export const createRootSaga = () => {

    return function* rootSaga() {
        
            yield all([
                    fork(PostSagas)
                ]);
        };
}
;
