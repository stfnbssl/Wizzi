/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\features\post\api.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import {getData, postData, putData, deleteData} from '../api/fetch';
import {IPost} from './types';
const apiUrl = 'http://localhost:3900/api/v1';

export function getPostList() {

    return getData(apiUrl + "/posts");
}

export function createPost(post: IPost) {

    return postData(apiUrl + "/posts", {
            data: post
         });
}

export function getPostById(id: string) {

    return getData(apiUrl + "/posts" + "/" + id);
}

export function updatePost(id: string, post: IPost) {

    return putData(apiUrl + "/posts" + "/" + id, {
            data: post
         });
}

export function deletePost(id: string) {

    return deleteData(apiUrl + "/posts" + "/" + id);
}
