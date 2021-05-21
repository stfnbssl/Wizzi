/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\features\post\actions.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import {deprecated} from "typesafe-actions";
const {
    createStandardAction
 } = deprecated;
import {IPost} from './types';
import {ResponsePayload} from '../../store';

const GET_POST_LIST_REQUEST = '@@post/GET_POST_LIST_REQUEST';
const GET_POST_LIST_SUCCESS = '@@post/GET_POST_LIST_SUCCESS';
const GET_POST_LIST_ERROR = '@@post/GET_POST_LIST_ERROR';
const GET_POST_BYID_REQUEST = '@@post/GET_POST_BYID_REQUEST';
const GET_POST_BYID_SUCCESS = '@@post/GET_POST_BYID_SUCCESS';
const GET_POST_BYID_ERROR = '@@post/GET_POST_BYID_ERROR';
const CREATE_POST_REQUEST = '@@post/CREATE_POST_REQUEST';
const CREATE_POST_SUCCESS = '@@post/CREATE_POST_SUCCESS';
const CREATE_POST_ERROR = '@@post/CREATE_POST_ERROR';
const UPDATE_POST_REQUEST = '@@post/UPDATE_POST_REQUEST';
const UPDATE_POST_SUCCESS = '@@post/UPDATE_POST_SUCCESS';
const UPDATE_POST_ERROR = '@@post/UPDATE_POST_ERROR';
const DELETE_POST_REQUEST = '@@post/DELETE_POST_REQUEST';
const DELETE_POST_SUCCESS = '@@post/DELETE_POST_SUCCESS';
const DELETE_POST_ERROR = '@@post/DELETE_POST_ERROR';

interface PostListResponsePayload extends ResponsePayload {
    posts: IPost[];
}

interface PostUpdatePayload {
    id: string;
    post: IPost;
}

interface PostResponsePayload extends ResponsePayload {
    post: IPost;
}

export const getPostListRequest = createStandardAction(GET_POST_LIST_REQUEST)<void>();
export const getPostListSuccess = createStandardAction(GET_POST_LIST_SUCCESS)<PostListResponsePayload>();
export const getPostListError = createStandardAction(GET_POST_LIST_ERROR)<string>();
export const getPostByIdRequest = createStandardAction(GET_POST_BYID_REQUEST)<string>();
export const getPostByIdSuccess = createStandardAction(GET_POST_BYID_SUCCESS)<PostResponsePayload>();
export const getPostByIdError = createStandardAction(GET_POST_BYID_ERROR)<string>();
export const createPostRequest = createStandardAction(CREATE_POST_REQUEST)<IPost>();
export const createPostSuccess = createStandardAction(CREATE_POST_SUCCESS)<PostResponsePayload>();
export const createPostError = createStandardAction(CREATE_POST_ERROR)<string>();
export const updatePostRequest = createStandardAction(UPDATE_POST_REQUEST)<PostUpdatePayload>();
export const updatePostSuccess = createStandardAction(UPDATE_POST_SUCCESS)<PostResponsePayload>();
export const updatePostError = createStandardAction(UPDATE_POST_ERROR)<string>();
export const deletePostRequest = createStandardAction(DELETE_POST_REQUEST)<string>();
export const deletePostSuccess = createStandardAction(DELETE_POST_SUCCESS)<PostResponsePayload>();
export const deletePostError = createStandardAction(DELETE_POST_ERROR)<string>();
