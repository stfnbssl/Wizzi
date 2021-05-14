/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\blog\api.tsx.ittf
    utc time: Fri, 14 May 2021 03:50:01 GMT
*/
import {getData, postData, putData, deleteData} from '../../common/apiFetch';
const apiUrl = 'http://localhost:4000/api/v1';

export function getPostList() {

    return getData(apiUrl + "/posts");
}

export function createPost(post) {

    return postData(apiUrl + "/posts", {
            data: post
         });
}

export function getPostById(id) {

    return getData(apiUrl + "/posts" + "/" + id);
}

export function updatePost(id, post) {

    return putData(apiUrl + "/posts" + "/" + id, {
            data: post
         });
}

export function deletePost(id) {

    return deleteData(apiUrl + "/posts" + "/" + id);
}
