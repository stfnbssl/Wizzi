/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\app\sagas.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import {all, fork, put, takeEvery, call} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';
import {config} from '../config';
import {packiActions} from '../packi';
import {INITIAL_CODE, DEFAULT_PACKI_NAME} from '../packi/defaults';
import * as appActions from './actions';
import {callApi} from '../../utils/api';
function* handleLoginUserByStoredUid(action: ReturnType<typeof appActions.loginUserByStoredUid>) {
    try {
        console.log('sagas.handleLoginUserByStoredUid.action', action);
        const res = yield call(callApi, 'get', config.API_URL, 'auth/github/loggedin/' + encodeURIComponent(action.payload.uid));
        console.log('sagas.handleLoginUserByStoredUid.res', res);
        yield put(appActions.loginUserByStoredUidSuccess(res));
        if (action.payload.selectedPackiId) {
            yield put(packiActions.selectPackiRequest({
                    id: action.payload.selectedPackiId
                 }));
        }
        else {
            yield put(packiActions.selectPackiSuccess({
                    id: DEFAULT_PACKI_NAME, 
                    files: INITIAL_CODE
                 }));
        }
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(appActions.loginUserByStoredUidError(err.stack!));
        }
        else {
            yield put(appActions.loginUserByStoredUidError('An unknown error occured.'));
        }
    } 
}
function* appRequest() {
    yield takeEvery(getType(appActions.loginUserByStoredUid), handleLoginUserByStoredUid);
}
function* appSaga() {
    yield all([
            fork(appRequest)
        ]);
}
export default appSaga;
