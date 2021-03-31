/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\site\controllers\home.ts.ittf
    utc time: Wed, 31 Mar 2021 20:00:35 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import { sendHtml } from '../../utils/sendResponse';
export class HomeController implements ControllerType {
    public path = '';
    public router = Router();
    initialize = (initValues: AppInitializerType) => 
        this.router.get(`/`, this.home);
    private home = async (request: Request, response: Response) => 
        sendHtml(response, '<h1>Hello world</h1>')
    
    ;
}
