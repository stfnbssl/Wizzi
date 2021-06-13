/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\site\controllers\demoWizzi.ts.ittf
    utc time: Wed, 09 Jun 2021 05:04:16 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';

export class DemoWizziController implements ControllerType {
    
    public path = '/demo/wizzi';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering DemoWizziController.initialize');
        this.router.get(`/`, this.index);
        this.router.post(`${this.path}/alpha/:id`, this.test);
    };
    
    private index = async (request: Request, response: Response) => 
    
        response.render('demoWizzi/index.html.ittf', {
            title: 'Wizzi section'
         })
    
    ;
    
    private test = async (request: Request, response: Response) => 
    
        response.render('demoWizzi/index.html.ittf', {
            title: 'Wizzi section: ' + request.params.id
         })
    
    ;
}
