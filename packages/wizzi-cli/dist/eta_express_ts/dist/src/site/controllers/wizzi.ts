/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\site\controllers\wizzi.ts.ittf
    utc time: Thu, 01 Apr 2021 15:10:45 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import { sendHtml } from '../../utils/sendResponse';

export class WizziController implements ControllerType {
    
    public path = '/wizzi';
    
    public router = Router();
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering WizziController.initialize');
        this.router.get(`/`, this.index);
    };
    
    private index = async (request: Request, response: Response) => 
        response.render('wizzi/index.html.ittf', {
            title: 'Wizzi section'
         })
    
    ;
}
