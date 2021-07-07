/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\site\controllers\tfolder.ts.ittf
    utc time: Tue, 06 Jul 2021 11:13:29 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import {tfolderApi} from '../../features/tfolder';

export class TFoldersController implements ControllerType {
    
    public path = '/tfolders';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering TFoldersController.initialize');
        this.router.get('/tfolders', this.tfolders);
    };
    
    private tfolders = async (request: Request, response: Response) => 
    
        tfolderApi.getListTFolder().then(result => 
        
            response.render('productions/tfolders.html.ittf', {
                title: 'tFolder · Wizzi', 
                tfolders: result.item
             })
        ).catch((err) => {
        
            console.log('tFolders.err', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
}
