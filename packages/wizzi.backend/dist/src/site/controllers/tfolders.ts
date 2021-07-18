/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\site\controllers\tfolders.ts.ittf
    utc time: Sun, 18 Jul 2021 15:08:53 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import jsesc from 'jsesc';
import {tFolderApi} from '../../features/production';

export class TFoldersController implements ControllerType {
    
    public path = '/tfolders';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering TFoldersController.initialize');
        this.router.get('/tfolders', this.tfolders);
    };
    
    private tfolders = async (request: Request, response: Response) => 
    
        tFolderApi.getListTFolder().then(result => 
        
            response.render('tfolders/tfolders.html.ittf', {
                title: 'tFolder · Wizzi', 
                tfolders: result.item, 
                __INITIAL_DATA__: `  window.__INITIAL_DATA__ = ${jsesc({
                    data: {
                        type: 'success', 
                        formName: 'ListTFolder', 
                        formData: {
                            tfolders: result.item
                         }
                     }, 
                    queryParams: {
                        
                     }
                 }, {
                    quotes: 'double', 
                    isScriptContext: true
                 })}`
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
