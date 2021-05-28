/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\site\controllers\blog.ts.ittf
    utc time: Tue, 25 May 2021 12:34:40 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';

export class BlogController implements ControllerType {
    
    public path = '/blog';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering BlogController.initialize');
        this.router.get('/edit', this.edit);
    };
    
    private edit = async (request: Request, response: Response) => 
    
        response.render('blog/edit.html.ittf', {
            title: 'Posts editor'
         })
    
    ;
}
