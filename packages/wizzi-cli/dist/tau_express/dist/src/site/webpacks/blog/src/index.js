/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\site\webpacks\blog\src\index.js.ittf
    utc time: Wed, 03 Mar 2021 15:56:02 GMT
*/
'use strict';
import {mountPostPage, mountPostList, mountPostForm} from './post.js';
function component() {
    const element = document.createElement('div');
    element.id = 'page-container';
    return element;
}
document.body.appendChild(component())
mountPostPage('page-container')
mountPostForm('post-form-container')
mountPostList('post-list-container')
