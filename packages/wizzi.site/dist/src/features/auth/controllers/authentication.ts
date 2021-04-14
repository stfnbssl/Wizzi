/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\features\auth\controllers\authentication.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {AuthRequest, IAccount} from '../types';
import {authenticate, jwtAuth} from '../manager';

export class AuthenticationController implements ControllerType {
    
    public path = '/api/v1/authenticate';
    
    public router = Router();
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering AuthenticationController.initialize');
        this.router.use(function(request: AuthRequest, res: Response, next: any) {
        
            if (request.query.socketId) {
                console.log('features.auth.controllers.auth.middleware.request.originalUrl,query', request.originalUrl, request.query);
                console.log('features.auth.controllers.auth.middleware.request.sessionID, session', request.sessionID, request.session);
                request.session.socketId = request.query.socketId;
                request.session.socketUserId = request.query.socketUserId;
            }
            next();
        })
        this.router.get(`/auth/github`, authenticate('github', {
            scope: [
                'user:email', 
                'public_repo'
            ]
         }), this.githubConnect.bind(this))
        this.router.get(`/auth/github/callback`, authenticate('github', {
            failureRedirect: `${this.path}/account`
         }), this.githubConnectCallback.bind(this))
        this.router.get(`${this.path}/github/loggedin/:uid`, this.getGithubLoggedIn)
    };
    
    private githubConnect = async (request: Request, response: Response) => {
    
    }
    ;
    
    private githubConnectCallback = 
    // Successful authentication
    async (request: Request, response: Response) => {
    
        console.log('features.auth.controllers.auth.githubCallback.request.sessionID,session', request.sessionID, request.session);
        console.log('features.auth.controllers.auth.githubCallback.request.user', request.user);
        const ruser: any = (request.user as any);
        const user = {
            id: ruser._id, 
            uid: ruser.uid, 
            username: ruser.username, 
            displayName: ruser.displayName, 
            picture: ruser.avatar_url
         };
        (request.session as any).token = ruser.tokens[0];
        const account: IAccount = {
            domain: 'github.com', 
            uid: ruser.uid, 
            username: ruser.username, 
            displayName: ruser.displayName, 
            avatar_url: ruser.avatar_url, 
            tokens: [
                {
                    kind: ruser.tokens[0].kind, 
                    token: ruser.tokens[0].token, 
                    attributes: ruser.tokens[0].attributes
                 }
            ]
         };
        response.end();
    }
    ;
    
    
    private getGithubLoggedIn = async (request: Request, response: Response) => {
    
        const uid = request.params.uid;
        console.log('features.auth.controllers.auth.getGithubLoggedIn.uid', uid);
        sendSuccess(response, {
            userId: uid
         })
    }
    ;
}
