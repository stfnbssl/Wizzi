/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\features\account\controllers\profile.ts.ittf
    utc time: Thu, 13 May 2021 19:47:49 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';

export class ProfileController implements ControllerType {
    
    public path = '/account/profile';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ProfileController.initialize');
        this.router.get(`/`, this.get).bind(this)
    };
    
    private get = async (request: Request, response: Response) => 
    
        response.render('account/profile/index.html.ittf', {
            title: 'Profile page', 
            user: request.user, 
            userProfile: JSON.stringify(request.user, null, 2)
         })
    
    ;
}
