/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\site\controllers\productions.ts.ittf
    utc time: Sun, 18 Jul 2021 15:08:53 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import jsesc from 'jsesc';
import {artifactApi, packageApi} from '../../features/production';

export class ProductionsController implements ControllerType {
    
    public path = '/productions';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ProductionsController.initialize');
        this.router.get('/artifacts', this.artifacts);
        this.router.get('/packages', this.packages);
        this.router.get('/metas', this.metas);
    };
    
    private artifacts = async (request: Request, response: Response) => 
    
        artifactApi.getListArtifactProduction().then(result => 
        
            response.render('productions/artifacts.html.ittf', {
                title: 'Artifact productions · Wizzi', 
                artifacts: result.item, 
                __INITIAL_DATA__: `  window.__INITIAL_DATA__ = ${jsesc({
                    data: {
                        type: 'success', 
                        formName: 'ListArtifactProduction', 
                        formData: {
                            artifacts: result.item
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
        
            console.log('artifact productions.err', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private packages = async (request: Request, response: Response) => 
    
        packageApi.getListPackageProduction().then(result => 
        
            response.render('productions/packages.html.ittf', {
                title: 'Package productions · Wizzi', 
                packages: result.item
             })
        ).catch((err) => {
        
            console.log('package productions.err', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    
    ;
    
    private metas = async (request: Request, response: Response) => 
    
        response.render('productions/metas.html.ittf', {
            title: 'Meta productions · Wizzi'
         })
    
    ;
}
