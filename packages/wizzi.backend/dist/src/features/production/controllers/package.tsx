/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\production\controllers\package.tsx.ittf
    utc time: Sun, 18 Jul 2021 15:08:53 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
import PageFormDocument from '../../../pages/PageFormDocument';
import {CRUDResult} from '../../types';
import {createPackageProduction} from '../api/package';

const myname = 'features/production/controllers/package';

function renderPageForm(req: Request, res: Response, data: object, queryParams: object) {

    const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
    <PageFormDocument
     data={data} queryParams={queryParams} />
    ));
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', index.length.toString());
    res.send(index);
}
function getPackiFiles(mainIttf: string) {

    return {
            [mainIttf]: {
                type: 'CODE', 
                contents: ''
             }
         };
}

export class PackageProductionController implements ControllerType {
    
    public path = '/package';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering PackageProductionController.initialize');
        this.router.get('/new', this.getNewPackageForm);
        this.router.post('/new', this.postNewPackage);
        this.router.get('/update', this.getUpdatePackageForm);
        this.router.post('/update', this.postUpdatePackage);
        this.router.get('/delete', this.getDeletePackageForm);
        this.router.delete('/delete', this.deletePackage);
    };
    
    private getNewPackageForm = async (request: Request, response: Response) => {
    
        console.log(myname, 'getNewPackageForm', JSON.stringify(request.query, null, 2));
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'CreatePackageProduction', 
            formData: {
                owner: request.query.owner, 
                name: request.query.name
             }
         }, {})
    }
    ;
    
    private postNewPackage = async (request: Request, response: Response) => {
    
        console.log(myname + '.postNewPackage.request.body', JSON.stringify(request.body, null, 2));
        console.log(myname + '.postNewPackage.request.session.user', JSON.stringify((request.session as any).user, null, 2));
        createPackageProduction((request.session as any).user.username, request.body.ap_name, request.body.ap_description, JSON.stringify(getPackiFiles(request.body.ap_main_ittf))).then((result: CRUDResult) => {
        
            console.log(myname + '.postNewPackage.createPackageProduction.result', JSON.stringify(result, null, 2));
            if (result.ok) {
                response.redirect('/productions/packages');
            }
            else {
                response.render('error.html.ittf', {
                    message: 'creating a new package production', 
                    error: result
                 })
            }
        }
        ).catch((err: any) => 
        
            response.render('error.html.ittf', {
                message: 'creating a new package production', 
                error: err
             })
        )
    }
    ;
    
    private getUpdatePackageForm = 
    // log myname + '.getUpdatePackageForm',
    async (request: Request, response: Response) => 
    
        renderPageForm(request, response, {
            type: 'success', 
            formName: 'UpdatePackage', 
            formData: {
                website: 'http://dummy.com'
             }
         }, {})
    
    ;
    
    private postUpdatePackage = 
    // log myname + '.postUpdatePackage',
    async (request: Request, response: Response) => {
    
    }
    ;
    
    private getDeletePackageForm = 
    // log myname + '.getDeletePackageForm',
    async (request: Request, response: Response) => {
    
    }
    ;
    
    private deletePackage = 
    // log myname + '.deletePackage',
    async (request: Request, response: Response) => {
    
    }
    ;
}
