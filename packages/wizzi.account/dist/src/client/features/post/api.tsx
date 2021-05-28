/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\features\post\api.tsx.ittf
    utc time: Tue, 25 May 2021 15:10:47 GMT
*/
import {getData, postData, putData, deleteData} from '../api/fetch';
import {IPost} from './types';
const apiUrl = 'http://localhost:3900/api/v1';

export async function getPostList():  Promise<IPost[]> {

    const res = await getData(apiUrl + "/posts");
    if (res.ok) {
        return res.json().then((data) => {
            
                return data.posts;
            }
            )
        ;
    }
    else {
        throw new Error(res.statusText);
    }
}

export async function createPost(post: IPost):  Promise<IPost> {

    const res = await postData(apiUrl + "/posts", {
            data: post
         });
    if (res.ok) {
        return res.json().then((data) => {
            
                return data.post;
            }
            )
        ;
    }
    else {
        throw new Error(res.statusText);
    }
}

export async function getPostById(id: string):  Promise<IPost> {

    const res = await getData(apiUrl + "/posts" + "/" + id);
    if (res.ok) {
        return res.json().then((data) => {
            
                return data.post;
            }
            )
        ;
    }
    else {
        throw new Error(res.statusText);
    }
}

export async function updatePost(id: string, post: IPost):  Promise<IPost> {

    const res = await putData(apiUrl + "/posts" + "/" + id, {
            data: post
         });
    if (res.ok) {
        return res.json().then((data) => {
            
                return data.post;
            }
            )
        ;
    }
    else {
        throw new Error(res.statusText);
    }
}

export async function deletePost(id: string):  Promise<IPost> {

    const res = await deleteData(apiUrl + "/posts" + "/" + id);
    if (res.ok) {
        return res.json().then((data) => {
            
                return data.post;
            }
            )
        ;
    }
    else {
        throw new Error(res.statusText);
    }
}
