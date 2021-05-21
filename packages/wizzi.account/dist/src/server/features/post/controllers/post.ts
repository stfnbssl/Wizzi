/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\features\post\controllers\post.ts.ittf
    utc time: Fri, 21 May 2021 16:01:34 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {IPost, GetPostModel} from '../mongo/post';

export class PostController implements ControllerType {
    
    public path = '/api/v1/posts';
    
    public router = Router();
    
    postModel: any;
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering PostController.initialize');
        this.postModel = GetPostModel();
        this.router.get(`/`, this.get.bind(this));
        this.router.post(`/`, this.createPost.bind(this));
        this.router.get(`/:id`, this.getPostById.bind(this));
        this.router.put(`/:id`, this.updatePost.bind(this));
        this.router.delete(`/:id`, this.deletePost.bind(this));
    };
    
    private get = async (request: Request, response: Response) => 
    
        this.postModel.find((err: any, posts: IPost[]) => {
        
            if (err) {
                console.log('get.err', err);
                return sendFailure(response, err, 501);
            }
            else {
                console.log('get.posts', posts);
                sendSuccess(response, {
                    posts: posts
                 })
            }
        }
        )
    
    ;
    
    private createPost = async (request: Request, response: Response) => {
    
        console.log('Entering PostController.createPost, request.body', request.body);
        const data = request.body.data;
        let post = new this.postModel(data);
        post.save().then((post: IPost) => 
        
            sendSuccess(response, {
                'message': 'Post created successfully', 
                post: post
             })
        ).catch((err: any) => {
        
            console.log('createPost.err', err);
            sendFailure(response, {
                message: "Post could not be created.", 
                err
             }, 501)
        }
        )
    }
    ;
    
    private getPostById = async (request: Request, response: Response) => {
    
        let id = request.params.id;
        this.postModel.findById(id, function(err: any, post: IPost) {
        
            if (err) {
                console.log('getPostById.err', err);
                return sendFailure(response, {
                        message: "Post could not be retrieved.", 
                        err
                     }, 501);
            }
            sendSuccess(response, {
                post: post
             })
        })
    }
    ;
    
    private updatePost = async (request: Request, response: Response) => {
    
        const id = request.params.id;
        this.postModel.findById(id, (err: any, post: IPost) => {
        
            if (err) {
                console.log('updatePost.err', err);
                return sendFailure(response, {
                        message: "Post could not be updated.", 
                        err
                     }, 501);
            }
            if (!post) {
                return sendFailure(response, {
                        message: 'Post data not found'
                     }, 501);
            }
            else {
                const data = request.body.data;
                post.author = data.author;
                post.title = data.title;
                post.content = data.content;
                post.save().then(post => 
                
                    sendSuccess(response, {
                        message: 'Post update complete.'
                     })
                ).catch((err) => {
                
                    console.log('updatePost.err', err);
                    sendFailure(response, {
                        message: 'Post could not be updated.', 
                        err
                     }, 501)
                }
                )
            }
        }
        )
    }
    ;
    
    private deletePost = async (request: Request, response: Response) => {
    
        const id = request.params.id;
        this.postModel.findByIdAndRemove({
            _id: id
         }, (err: any, post: IPost) => {
        
            if (err) {
                console.log('deletePost.err', err);
                return sendFailure(response, {
                        message: "Post could not be deleted.", 
                        err
                     }, 501);
            }
            else {
                sendSuccess(response, {
                    message: 'Post successfully removed'
                 })
            }
        }
        )
    }
    ;
}
