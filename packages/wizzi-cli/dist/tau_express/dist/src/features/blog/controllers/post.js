/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\features\blog\controllers\post.js.ittf
    utc time: Wed, 03 Mar 2021 14:10:30 GMT
*/
'use strict';
import { Router } from 'express';
import { sendFailure, sendSuccess } from '../../../utils/response.js';
import { GetPostModel } from '../mongo/post.js';
export class PostController {
    constructor() {
        this.path = '/api/v1/posts';
        this.router = Router();
        this.postModel = null;
    }
    initialize(initValues) {
        console.log('Entering PostController.initialize');
        this.postModel = GetPostModel();
        this.router.get(`/`, this.get.bind(this));
        this.router.post(`/`, this.createPost.bind(this));
        this.router.get(`/:id`, this.getPostById.bind(this));
        this.router.put(`/:id`, this.updatePost.bind(this));
        this.router.delete(`/:id`, this.deletePost.bind(this));
    }
    get(req, res) {
        this.postModel.find((err, posts) => {
            if (err) {
                console.log('get.err', posts);
                return sendFailure(res, err);
            }
            else {
                console.log('get.posts', posts);
                sendSuccess(res, {
                    posts: posts
                })
            }
        })
    }
    createPost(req, res) {
        console.log('Entering blog.PostController.createPost, req.body', req.body);
        let post = new this.postModel(req.body);
        post.save().then((post) =>
            sendSuccess(res, {
                'message': 'Post created successfully'
            })).catch((err) =>
            sendFailure(res, {
                message: "Post could not be created.", 
               
                err
            }))
    }
    getPostById(req, res) {
        let id = req.params.id;
        this.postModel.findById(id, function(err, post) {
            if (err) {
                return sendFailure(res, err);
            }
            sendSuccess(res, {
                post: post
            })
        })
    }
    updatePost(req, res) {
        const id = req.params.id;
        this.postModel.findById(id, (err, post) => {
            if (err) {
                return sendFailure(res, err);
            }
            if (!post) {
                return sendFailure(res, {
                        message: 'Post data not found'
                    }, 404);
            }
            else {
                post.author = req.body.author;
                post.title = req.body.title;
                post.content = req.body.content;
                post.save().then((post) =>
                    sendSuccess(res, {
                        message: 'Post update complete.'
                    })).catch((err) =>
                    sendFailure(res, {
                        message: 'Post could not be updated.', 
                        err
                    }, 400))
            }
        })
    }
    deletePost(req, res) {
        const id = req.params.id;
        this.postModel.findByIdAndRemove({
            _id: id
        }, (err, post) => {
            if (err) {
                return sendFailure(res, err);
            }
            else {
                sendSuccess(res, {
                    message: 'Post successfully removed'
                })
            }
        })
    }
}
