/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\site\webpacks\blog\src\api.js.ittf
    utc time: Thu, 04 Mar 2021 19:31:00 GMT
*/
'use strict';
import {getData, postData, putData, deleteData} from '../../common/apiFetch.js';
const apiUrl = 'http://localhost:5000/api/v1';

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
