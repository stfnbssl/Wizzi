/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\store\sagas.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import {all, fork} from 'redux-saga/effects';
import appSagas from '../features/app/sagas';
import packiSagas from '../features/packi/sagas';
import wizziSagas from '../features/wizzi/sagas';
export const createRootSaga = () => {
    return function* rootSaga() {
            yield all([
                    fork(appSagas), 
                    fork(packiSagas), 
                    fork(wizziSagas)
                ]);
        };
}
;
