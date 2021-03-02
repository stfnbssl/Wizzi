/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\site\webpacks\blog\src\post.js.ittf
    utc time: Tue, 02 Mar 2021 21:04:16 GMT
*/
'use strict';
import {createPage} from '../../common/page.js';
import {createList} from '../../common/lists.js';
import {createForm} from '../../common/forms.js';
const blogPageDef = {
    kind: "app", 
    reset: "default", 
    elementId: "page_container", 
    items: [
        {
            kind: "header", 
            height: 40, 
            items: [
                {
                    kind: "menu", 
                    direction: "row", 
                    items: [
                        {
                            label: "Wizzi"
                        }, 
                        {
                            label: "Blog"
                        }, 
                        {
                            label: "Github"
                        }
                    ]
                }
            ]
        }, 
        {
            kind: "flex", 
            direction: "row", 
            items: [
                {
                    kind: "panel", 
                    id: "post-list-container"
                }, 
                {
                    kind: "panel", 
                    id: "post-form-container"
                }
            ]
        }, 
        {
            kind: "footer", 
            items: [
                
            ]
        }
    ]
};
const blogListDef = {
    id: "postList", 
    title: "Posts", 
    kind: "table", 
    isEditAdd: true, 
    hasSearch: true, 
    columns: [
        {
            id: "id", 
            label: "id", 
            type: "text", 
            isKey: true
        }, 
        {
            id: "author", 
            label: "author", 
            type: "text"
        }, 
        {
            id: "title", 
            label: "title", 
            type: "text"
        }
    ], 
    onRemove: console.log, 
    onAdd: console.log, 
    onUpdate: console.log
};
const blogListData = {
    items: [
        {
            id: 1, 
            author: "Stefi", 
            title: "Post 1"
        }, 
        {
            id: 2, 
            author: "Stefi", 
            title: "Post 2"
        }, 
        {
            id: 3, 
            author: "Stefi", 
            title: "Post 3"
        }
    ]
};
const blogFormDef = {
    id: "blogPost", 
    title: "Blog post", 
    controls: [
        {
            id: "author", 
            label: "author", 
            type: "text", 
            required: true
        }, 
        {
            id: "title", 
            label: "title", 
            type: "text", 
            required: true
        }
    ]
};
export function mountPostPage(elementId, layoutType, props) {
    createPage(blogPageDef, elementId, props)
}
export function mountPostForm(elementId, props) {
    createForm(blogFormDef, elementId, props)
}
export function mountPostList(elementId, props) {
    createList({
        def: blogListDef, 
        data: blogListData
    }, elementId, props)
}
