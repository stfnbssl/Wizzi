/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\site\webpacks\blog\src\post.js.ittf
    utc time: Wed, 03 Mar 2021 15:56:02 GMT
*/
'use strict';
import {getPostList, createPost, getPostById, updatePost, deletePost} from './api.js';
import {createPage} from '../../common/page.js';
import {createList} from '../../common/lists.js';
import {createForm} from '../../common/forms.js';
const postPageDef = {
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
const postListDef = {
    id: "postList", 
    title: "Blog posts", 
    kind: "table", 
    isEditAdd: true, 
    hasSearch: true, 
    columns: [
        {
            id: "_id", 
            label: "_id", 
            ctrlId: "fd_1_post_id", 
            type: "text", 
            isKey: true
        }, 
        {
            id: "author", 
            label: "author", 
            ctrlId: "fd_1_post_author", 
            type: "text"
        }, 
        {
            id: "title", 
            label: "title", 
            ctrlId: "fd_1_post_title", 
            type: "text"
        }
    ], 
    onRemove: console.log, 
    onAdd: console.log, 
    onUpdate: console.log
};
const postListData = {
    items: [
        {
            _id: "id 101", 
            author: "Stefi 101", 
            title: "My postulates 101"
        }, 
        {
            _id: "id 102", 
            author: "Stefi 102", 
            title: "My postulates 102"
        }, 
        {
            _id: "id 0", 
            author: "Stefi 0", 
            title: "My postulates 0"
        }, 
        {
            _id: "id 1", 
            author: "Stefi 1", 
            title: "My postulates 1"
        }, 
        {
            _id: "id 2", 
            author: "Stefi 2", 
            title: "My postulates 2"
        }, 
        {
            _id: "id 3", 
            author: "Stefi 3", 
            title: "My postulates 3"
        }, 
        {
            _id: "id 4", 
            author: "Stefi 4", 
            title: "My postulates 4"
        }, 
        {
            _id: "id 5", 
            author: "Stefi 5", 
            title: "My postulates 5"
        }, 
        {
            _id: "id 6", 
            author: "Stefi 6", 
            title: "My postulates 6"
        }, 
        {
            _id: "id 7", 
            author: "Stefi 7", 
            title: "My postulates 7"
        }, 
        {
            _id: "id 8", 
            author: "Stefi 8", 
            title: "My postulates 8"
        }, 
        {
            _id: "id 9", 
            author: "Stefi 9", 
            title: "My postulates 9"
        }, 
        {
            _id: "id 10", 
            author: "Stefi 10", 
            title: "My postulates 10"
        }, 
        {
            _id: "id 11", 
            author: "Stefi 11", 
            title: "My postulates 11"
        }, 
        {
            _id: "id 12", 
            author: "Stefi 12", 
            title: "My postulates 12"
        }, 
        {
            _id: "id 13", 
            author: "Stefi 13", 
            title: "My postulates 13"
        }, 
        {
            _id: "id 14", 
            author: "Stefi 14", 
            title: "My postulates 14"
        }, 
        {
            _id: "id 15", 
            author: "Stefi 15", 
            title: "My postulates 15"
        }, 
        {
            _id: "id 16", 
            author: "Stefi 16", 
            title: "My postulates 16"
        }, 
        {
            _id: "id 17", 
            author: "Stefi 17", 
            title: "My postulates 17"
        }, 
        {
            _id: "id 18", 
            author: "Stefi 18", 
            title: "My postulates 18"
        }, 
        {
            _id: "id 19", 
            author: "Stefi 19", 
            title: "My postulates 19"
        }
    ]
};
const postFormDef = {
    id: "postForm", 
    title: "Blog post", 
    controls: [
        {
            id: "_id", 
            label: "_id", 
            ctrlId: "fd_1_post_id", 
            type: "oid"
        }, 
        {
            id: "author", 
            label: "author", 
            ctrlId: "fd_1_post_author", 
            type: "text"
        }, 
        {
            id: "title", 
            label: "title", 
            ctrlId: "fd_1_post_title", 
            type: "text"
        }, 
        {
            id: "content", 
            label: "content", 
            ctrlId: "fd_1_post_content", 
            type: "text"
        }
    ]
};
export function mountPostPage(elementId, props) {
    createPage(postPageDef, elementId, props)
}
export function mountPostForm(elementId, props) {
    postFormDef.onSubmit = (formData) => {
        console.log('pageComponent post', 'form onSubmit', 'formData', formData);
    };
    postFormDef.onCancel = () => {
        console.log('pageComponent post', 'form onCancel');
    };
    createForm(postFormDef, elementId, props)
}
export function mountPostList(elementId, props) {
    postListDef.onSelectItem = (item) => {
        console.log('pageComponent post', 'list onSelectItem', item);
    };
    postListDef.onDeleteItem = (item) => {
        console.log('pageComponent post', 'list onDeleteItem', item);
    };
    createList({
        def: postListDef, 
        data: postListData
    }, elementId, props)
}
