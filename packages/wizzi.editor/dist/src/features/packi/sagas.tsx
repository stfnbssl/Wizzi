/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\features\packi\sagas.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import {all, fork, put, takeEvery, call} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';
import {config} from '../config';
import {appActions} from '../app';
import * as packiActions from './actions';
import * as packiTypes from './types';
import {callApi} from '../../utils/api';

function* handleFetchPackiTemplateListRequest(action: ReturnType<typeof packiActions.fetchPackiTemplateListRequest>):  any {

    try {
        console.log('sagas.handleFetchPackiTemplateListRequest.action', action);
        const res = yield call(callApi, 'get', config.API_URL, 'templates');
        console.log('sagas.handleFetchPackiTemplateListRequest.res', res);
        yield put(packiActions.fetchPackiTemplateListSuccess({
                packiNames: res
             }));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(packiActions.fetchPackiTemplateListError(err.stack!));
        }
        else {
            yield put(packiActions.fetchPackiTemplateListError('An unknown error occured.'));
        }
    } 
}

function* handleFetchOwnedGitRepositoriesRequest(action: ReturnType<typeof packiActions.fetchOwnedGitRepositoriesRequest>):  any {

    try {
        console.log('sagas.handleFetchOwnedGitRepositoriesRequest.action', action);
        const res = yield call(callApi, 'get', config.API_URL, `github/ownedrepos/${action.payload.uid}`);
        console.log('sagas.handleFetchOwnedGitRepositoriesRequest.res', res);
        yield put(packiActions.fetchOwnedGitRepositoriesSuccess({
                repositories: res
             }));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(packiActions.fetchOwnedGitRepositoriesError(err.stack!));
        }
        else {
            yield put(packiActions.fetchOwnedGitRepositoriesError('An unknown error occured.'));
        }
    } 
}

function* handleCloneGitRepositoryRequest(action: ReturnType<typeof packiActions.cloneGitRepositoryRequest>):  any {

    try {
        console.log('sagas.handleCloneGitRepositoryRequest.action', action);
        const res = yield call(callApi, 'get', config.API_URL, `github/clone/${action.payload.uid}/${action.payload.owner}/${action.payload.name}/${action.payload.branch}/${
            action.payload.ittfOnly
             ? 'ittf'
             : 'all'}
            `);
        console.log('sagas.handleCloneGitRepositoryRequest.res', res);
        yield put(packiActions.cloneGitRepositorySuccess({
                repository: res
             }));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(packiActions.cloneGitRepositoryError(err.stack!));
        }
        else {
            yield put(packiActions.cloneGitRepositoryError('An unknown error occured.'));
        }
    } 
}

function* handleCommitGitRepositoryRequest(action: ReturnType<typeof packiActions.commitGitRepositoryRequest>):  any {

    try {
        console.log('sagas.handleCommitGitRepositoryRequest.action', action);
        const res = yield call(callApi, 'post', config.API_URL, `github/commit/${action.payload.uid}/${action.payload.owner}/${action.payload.name}/${action.payload.branch}`, {
                files: action.payload.files
             });
        console.log('sagas.handleCommitGitRepositoryRequest.res', res);
        yield put(packiActions.commitGitRepositorySuccess({}));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(packiActions.commitGitRepositoryError(err.stack!));
        }
        else {
            yield put(packiActions.commitGitRepositoryError('An unknown error occured.'));
        }
    } 
}

function* handleUploadPackiTemplateRequest(action: ReturnType<typeof packiActions.uploadPackiTemplateRequest>):  any {

    try {
        console.log('sagas.handleUploadPackiTemplateRequest.action', action);
        const res = yield call(callApi, 'post', config.API_URL, `templates/${action.payload.uid}/${action.payload.templateId}`, {
                files: action.payload.files
             });
        console.log('sagas.handleUploadPackiTemplateRequest.res', res);
        yield put(packiActions.uploadPackiTemplateSuccess({}));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(packiActions.uploadPackiTemplateError(err.stack!));
        }
        else {
            yield put(packiActions.uploadPackiTemplateError('An unknown error occured.'));
        }
    } 
}

function* watchFetchRequest() {

    yield takeEvery(getType(packiActions.fetchPackiTemplateListRequest), handleFetchPackiTemplateListRequest);
    yield takeEvery(getType(packiActions.fetchOwnedGitRepositoriesRequest), handleFetchOwnedGitRepositoriesRequest);
    yield takeEvery(getType(packiActions.cloneGitRepositoryRequest), handleCloneGitRepositoryRequest);
}

function* watchCrudRequest() {

    yield takeEvery(getType(packiActions.commitGitRepositoryRequest), handleCommitGitRepositoryRequest);
    yield takeEvery(getType(packiActions.uploadPackiTemplateRequest), handleUploadPackiTemplateRequest);
}

function* packiSaga() {

    yield all([
            fork(watchFetchRequest), 
            fork(watchCrudRequest)
        ]);
}

export default packiSaga;
