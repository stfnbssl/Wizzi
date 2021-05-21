/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\features\post\saga.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import {all, fork, put, takeEvery, call} from 'redux-saga/effects';
import {getType} from 'typesafe-actions';
import {IPost} from './types';
import {getPostList, createPost, getPostById, updatePost, deletePost} from './api';
import * as postActions from './actions';

function* handleGetPostListRequest(action: ReturnType<typeof postActions.getPostListRequest>):  any {

    try {
        console.log('sagas.handleGetPostListRequest.action', action);
        const res: IPost[] = yield getPostList();
        yield put(postActions.getPostListSuccess({
                posts: res, 
                message: "Post created"
             }));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(postActions.getPostListError(err.stack!));
        }
        else {
            yield put(postActions.getPostListError('An unknown error occured.'));
        }
    } 
}

function* handleGetPostByIdRequest(action: ReturnType<typeof postActions.getPostByIdRequest>):  any {

    try {
        console.log('sagas.handleGetPostByIdRequest.action', action);
        const res: IPost = yield getPostById(action.payload);
        yield put(postActions.getPostByIdSuccess({
                post: res, 
                message: "Post retrieved"
             }));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(postActions.getPostByIdError(err.stack!));
        }
        else {
            yield put(postActions.getPostByIdError('An unknown error occured.'));
        }
    } 
}

function* handleCreatePostRequest(action: ReturnType<typeof postActions.createPostRequest>):  any {

    try {
        console.log('sagas.handleCreatePostRequest.action', action);
        const res: IPost = yield createPost(action.payload);
        yield put(postActions.createPostSuccess({
                post: res, 
                message: "Post created"
             }));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(postActions.createPostError(err.stack!));
        }
        else {
            yield put(postActions.createPostError('An unknown error occured.'));
        }
    } 
}

function* handleUpdatePostRequest(action: ReturnType<typeof postActions.updatePostRequest>):  any {

    try {
        console.log('sagas.handleUpdatePostRequest.action', action);
        const res: IPost = yield updatePost(action.payload.id, action.payload.post);
        yield put(postActions.updatePostSuccess({
                post: res, 
                message: "Post updated"
             }));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(postActions.updatePostError(err.stack!));
        }
        else {
            yield put(postActions.updatePostError('An unknown error occured.'));
        }
    } 
}

function* handleDeletePostRequest(action: ReturnType<typeof postActions.deletePostRequest>):  any {

    try {
        console.log('sagas.handleDeletePostRequest.action', action);
        const res: IPost = yield deletePost(action.payload);
        yield put(postActions.deletePostSuccess({
                post: res, 
                message: "Post deleted"
             }));
    } 
    catch (err) {
        if (err instanceof Error) {
            yield put(postActions.deletePostError(err.stack!));
        }
        else {
            yield put(postActions.deletePostError('An unknown error occured.'));
        }
    } 
}

function* watchGetRequest() {

    yield takeEvery(getType(postActions.getPostListRequest), handleGetPostListRequest);
    yield takeEvery(getType(postActions.getPostByIdRequest), handleGetPostByIdRequest);
}

function* watchCrudRequest() {

    yield takeEvery(getType(postActions.createPostRequest), handleCreatePostRequest);
    yield takeEvery(getType(postActions.updatePostRequest), handleUpdatePostRequest);
    yield takeEvery(getType(postActions.deletePostRequest), handleDeletePostRequest);
}

function* postSaga() {

    yield all([
            fork(watchGetRequest), 
            fork(watchCrudRequest)
        ]);
}

export default postSaga;
