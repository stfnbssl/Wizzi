/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\controllers\wizzi.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';

export class WizziController implements ControllerType {
    
    public path = '/wizzi';
    
    public router = Router();
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering WizziController.initialize');
        this.router.get(`/`, this.index);
        this.router.post(`${this.path}/alpha/:id`, this.test);
    };
    
    private index = async (request: Request, response: Response) => 
    
        response.render('wizzi/index.html.ittf', {
            title: 'Wizzi section'
         })
    
    ;
    
    private test = async (request: Request, response: Response) => 
    
        response.render('wizzi/index.html.ittf', {
            title: 'Wizzi section: ' + request.params.id
         })
    
    ;
}
