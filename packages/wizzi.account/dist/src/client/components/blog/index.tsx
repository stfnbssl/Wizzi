/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\blog\index.tsx.ittf
    utc time: Fri, 14 May 2021 03:50:01 GMT
*/
import {mountPostPage, mountPostList, mountPostForm} from './post';
function component() {

    const element = document.createElement('div');
    element.id = 'page-container';
    return element;
}
document.body.appendChild(component())
mountPostPage('page-container')
mountPostForm('post-form-container')
mountPostList('post-list-container')
