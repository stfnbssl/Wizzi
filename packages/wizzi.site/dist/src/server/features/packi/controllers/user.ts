/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\packi\controllers\user.ts.ittf
    utc time: Wed, 09 Jun 2021 05:04:16 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {IUser} from '../types';
import {UserModelType, GetUserModel} from '../mongo/user';

export class UserController implements ControllerType {
    
    public path = 'user';
    
    public router = Router();
    
    public UserModel: UserModelType;
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering UserController.initialize');
        this.UserModel = GetUserModel();
        ;
        this.router.get('/', this.get);
        this.router.post('/', this.addNewUser);
        this.router.get('/:id', this.getUserById);
        this.router.get('/username/:username', this.getUserBy_username);
        this.router.get('/email/:email', this.getUserBy_email);
        this.router.put('/:id', this.updateUser);
        this.router.delete('/:id', this.deleteUser);
    };
    
    private addNewUser = async (request: Request, response: Response) => {
    
        let newUser = new this.UserModel(request.body);
        newUser.save((err, user) => {
        
            if (err) {
                sendFailure(response, err, 501)
            }
            sendSuccess(response, {
                data: user
             })
        }
        )
    }
    ;
    
    private get = async (request: Request, response: Response) => 
    
        this.UserModel.find({}, (err, user) => {
        
            if (err) {
                sendFailure(response, err, 501)
            }
            sendSuccess(response, {
                data: user
             })
        }
        )
    
    ;
    
    private getUserById = async (request: Request, response: Response) => 
    
        this.UserModel.findById(request.params.id, (err: any, user: IUser) => {
        
            if (err) {
                sendFailure(response, err, 501)
            }
            sendSuccess(response, {
                data: user
             })
        }
        )
    
    ;
    
    private getUserBy_username = async (request: Request, response: Response) => 
    
        this.UserModel.find({
            username: request.params.username
         }, (err, user) => {
        
            if (err) {
                sendFailure(response, err, 501)
            }
            sendSuccess(response, {
                data: user
             })
        }
        )
    
    ;
    
    private getUserBy_email = async (request: Request, response: Response) => 
    
        this.UserModel.find({
            email: request.params.email
         }, (err, user) => {
        
            if (err) {
                sendFailure(response, err, 501)
            }
            sendSuccess(response, {
                data: user
             })
        }
        )
    
    ;
    
    private updateUser = async (request: Request, response: Response) => 
    
        this.UserModel.findOneAndUpdate({
            _id: request.params.id
         }, request.body, {
            new: true
         }, (err, user) => {
        
            if (err) {
                sendFailure(response, err, 501)
            }
            sendSuccess(response, {
                data: user
             })
        }
        )
    
    ;
    
    private deleteUser = async (request: Request, response: Response) => 
    
        this.UserModel.remove({
            _id: request.params.id
         }, (err) => {
        
            if (err) {
                sendFailure(response, err, 501)
            }
            sendSuccess(response, {
                message: 'Successfully deleted user!'
             })
        }
        )
    
    ;
}
