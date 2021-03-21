/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\wizzi\sagas.tsx.ittf
    utc time: Sun, 21 Mar 2021 14:14:13 GMT
*/
import {all, fork, put, takeEvery, call} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';
import {config} from '../config';
import * as wizziActions from './actions';
import {packiActions} from '../packi';
import {callApi} from '../../utils/api';
import {packiFilterIttf} from '../packi/convertFileStructure';
// import { getInstance } from '../../services/EventService';
function* handleGenerateArtifactRequest(action: ReturnType<typeof wizziActions.generateArtifactRequest>) {
    try {
        console.log('sagas.handleGenerateArtifactRequest.action', action);
        const res = yield call(callApi, 'post', config.API_URL, 'productions/artifact/' + encodeURIComponent(action.payload.filePath), action.payload.files);
        ;
        console.log('sagas.handleGenerateArtifactRequest.res', res);
        yield put(wizziActions.generateArtifactSuccess(res));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(wizziActions.generateArtifactError(err.stack!))}
        else {
            yield put(wizziActions.generateArtifactError('An unknown error occured.'));
        }
    } 
}
function* handleExecuteJobRequest(action: ReturnType<typeof wizziActions.executeJobRequest>) {
    try {
        console.log('sagas.handleExecuteJobRequest.action', action);
        const res = yield call(callApi, 'post', config.API_URL, 'productions/job/', packiFilterIttf(action.payload.files));
        ;
        console.log('sagas.handleExecuteJobRequest.res', res);
        yield put(wizziActions.executeJobSuccess(res));
        yield put(packiActions.executeJobSuccess({
                generatedArtifacts: res.generatedArtifacts, 
                previousArtifacts: action.payload.files
            }))} 
    catch (err) {
        if (err instanceof Error) {
            yield put(wizziActions.executeJobError(err.stack!))}
        else {
            yield put(wizziActions.executeJobError('An unknown error occured.'));
        }
    } 
}
function* wizziRequest() {
    yield takeEvery(getType(wizziActions.generateArtifactRequest), handleGenerateArtifactRequest);
    yield takeEvery(getType(wizziActions.executeJobRequest), handleExecuteJobRequest);
}
function* wizziSaga() {
    yield all([
            fork(wizziRequest)
        ])}
export default wizziSaga;
