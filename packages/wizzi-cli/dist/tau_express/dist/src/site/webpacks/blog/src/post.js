/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\site\webpacks\blog\src\post.js.ittf
    utc time: Thu, 04 Mar 2021 19:31:00 GMT
*/
'use strict';
import {getPostList, createPost, getPostById, updatePost, deletePost} from './api.js';
import {createPage} from '../../common/page.js';
import {createList} from '../../common/lists.js';
import {createForm} from '../../common/forms.js';

var formMethods = null;
var listMethods = null;

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
            type: "oid", 
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
    postFormDef.onStart = (methods) =>
        formMethods = methods;
    postFormDef.onAdd = (formData) => {
        console.log('pageComponent post', 'form onSubmit', 'formData', formData);
        var __response_ok = false;
        var __response_status = false;
        createPost(formData).then((response) => {
            console.log('createPost', 'response', response);
            __response_status = response.status;
            if (response.ok) {
                __response_ok = true;
            }
            return response.json();
        }).then(function(data) {
            if (__response_ok) {
                console.log({
                    action: 'createPost', 
                    message: "success", 
                    data: data
                })
                if (listMethods && listMethods.onDoneAddItem) {
                    listMethods.onDoneAddItem(data.post)
                }
                if (formMethods && formMethods.onDoneAddItem) {
                    formMethods.onDoneAddItem(data.post)
                }
            }
            else {
                console.log({
                    action: 'createPost', 
                    message: "failure", 
                    responseStatus: __response_status, 
                    error: data
                })
            }
        }).catch(function(error) {
            console.log({
                action: 'createPost', 
                error: error
            })
        })
    };
    postFormDef.onCancel = () => {
        console.log('pageComponent post', 'form onCancel');
    };
    postFormDef.onConfirmUpdate = (formData) => {
        console.log('pageComponent post', 'form onConfirmUpdate', 'formData', formData);
        var __response_ok = false;
        var __response_status = false;
        updatePost(formData._id, formData).then((response) => {
            console.log('updatePost', 'response', response);
            __response_status = response.status;
            if (response.ok) {
                __response_ok = true;
            }
            return response.json();
        }).then(function(data) {
            if (__response_ok) {
                console.log({
                    action: 'updatePost', 
                    message: "success", 
                    data: data
                })
                console.log('listMethods && listMethods.onDoneUpdate', listMethods && listMethods.onDoneUpdateItem);
                if (listMethods && listMethods.onDoneUpdateItem) {
                    listMethods.onDoneUpdateItem(formData)
                }
                console.log('formMethods && formMethods.onDoneUpdate', formMethods && formMethods.onDoneUpdateItem);
                if (formMethods && formMethods.onDoneUpdateItem) {
                    formMethods.onDoneUpdateItem(formData)
                }
            }
            else {
                console.log({
                    action: 'updatePost', 
                    message: "failure", 
                    responseStatus: __response_status, 
                    error: data
                })
            }
        }).catch(function(error) {
            console.log({
                action: 'updatePost', 
                error: error
            })
        })
    };
    postFormDef.onConfirmDelete = (formData) => {
        console.log('pageComponent post', 'form onConfirmDelete', 'formData', formData);
        var __response_ok = false;
        var __response_status = false;
        deletePost(formData._id).then((response) => {
            console.log('deletePost', 'response', response);
            __response_status = response.status;
            if (response.ok) {
                __response_ok = true;
            }
            return response.json();
        }).then(function(data) {
            if (__response_ok) {
                console.log({
                    action: 'deletePost', 
                    message: "success", 
                    data: data
                })
                if (listMethods && listMethods.onDoneDeleteItem) {
                    listMethods.onDoneDeleteItem(formData._id)
                }
                if (formMethods && formMethods.onDoneUpdateItem) {
                    formMethods.onDoneDeleteItem(formData._id)
                }
            }
            else {
                console.log({
                    action: 'deletePost', 
                    message: "failure", 
                    responseStatus: __response_status, 
                    error: data
                })
            }
        }).catch(function(error) {
            console.log({
                action: 'deletePost', 
                error: error
            })
        })
    };
    createForm(postFormDef, elementId, props)
}

export function mountPostList(elementId, props) {
    postListDef.onStart = (methods) =>
        listMethods = methods;
    postListDef.onSelectItem = (item) => {
        console.log('pageComponent post', 'list onSelectItem', item);
        var __response_ok = false;
        var __response_status = false;
        getPostById(item._id).then((response) => {
            console.log('getPostById', 'response', response);
            __response_status = response.status;
            if (response.ok) {
                __response_ok = true;
            }
            return response.json();
        }).then(function(data) {
            if (__response_ok) {
                console.log({
                    action: 'getPostById', 
                    message: "success", 
                    data: data
                })
                formMethods.setUpdateItem(data.post)
            }
            else {
                console.log({
                    action: 'getPostById', 
                    message: "failure", 
                    responseStatus: __response_status, 
                    error: data
                })
            }
        }).catch(function(error) {
            console.log({
                action: 'getPostById', 
                error: error
            })
        })
    };
    postListDef.onDeleteItem = (item) => {
        console.log('pageComponent post', 'list onDeleteItem', item);
        var __response_ok = false;
        var __response_status = false;
        getPostById(item._id).then((response) => {
            console.log('getPostById', 'response', response);
            __response_status = response.status;
            if (response.ok) {
                __response_ok = true;
            }
            return response.json();
        }).then(function(data) {
            if (__response_ok) {
                console.log({
                    action: 'getPostById', 
                    message: "success", 
                    data: data
                })
                formMethods.setDeleteItem(data.post)
            }
            else {
                console.log({
                    action: 'getPostById', 
                    message: "failure", 
                    responseStatus: __response_status, 
                    error: data
                })
            }
        }).catch(function(error) {
            console.log({
                action: 'getPostById', 
                error: error
            })
        })
    };
    startList(elementId, props)
}
function startList(elementId, props) {
    var __response_ok = false;
    var __response_status = false;
    getPostList().then((response) => {
        console.log('getPostList', 'response', response);
        __response_status = response.status;
        if (response.ok) {
            __response_ok = true;
        }
        return response.json();
    }).then(function(data) {
        if (__response_ok) {
            console.log({
                action: 'getPostList', 
                message: "success", 
                data: data
            })
            createList({
                def: postListDef, 
                data: {
                    items: data.posts
                }
            }, elementId, props)
        }
        else {
            console.log({
                action: 'getPostList', 
                message: "failure", 
                responseStatus: __response_status, 
                error: data
            })
        }
    }).catch(function(error) {
        console.log({
            action: 'getPostList', 
            error: error
        })
    })
}
