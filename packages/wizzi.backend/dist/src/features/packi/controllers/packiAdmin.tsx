/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\packi\controllers\packiAdmin.tsx.ittf
    utc time: Mon, 28 Jun 2021 20:09:52 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
import wizziProto from 'wizzi.proto';
import PageFormDocument from '../pages/PageFormDocument';
const myname = 'features/packi/controller/packiAdmin';

function renderPackiPageForm(req: Request, res: Response, data: object, queryParams: object) {

    const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
    <PageFormDocument
     data={data} queryParams={queryParams} />
    ));
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', index.length.toString());
    console.log("renderPackiPageForm.before sending", index.length);
    res.send(index);
    console.log("renderPackiPageForm.after sending");
}

export class PackiAdminController implements ControllerType {
    
    public path = '/packi/admin';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering PackiAdminController.initialize');
        wizziProto.start('stfnbssl', {}, () => {
        
        }
        )
        this.router.get('/newpacki', this.getNewPackiPageForm);
        this.router.post('/newpacki', this.postNewPacki);
        this.router.get('/newtfolder', this.getNewTFolderPageForm);
        this.router.post('/newtfolder', this.postNewTFolder);
        this.router.get('/theme', this.getThemesDemo);
    };
    
    private postNewPacki = async (request: Request, response: Response) => {
    
    }
    ;
    
    private postNewTFolder = async (request: Request, response: Response) => {
    
    }
    ;
    
    private getNewPackiPageForm = 
    // TODO
    
    // log myname + '.getNewPackiPageForm',
    async (request: Request, response: Response) => 
    
        renderPackiPageForm(request, response, {
            type: 'success', 
            formName: 'CreatePacki', 
            formData: {
                
             }
         }, {})
    
    ;
    
    private getNewTFolderPageForm = 
    // TODO
    
    // log myname + '.getNewTFolderPageForm',
    async (request: Request, response: Response) => 
    
        renderPackiPageForm(request, response, {
            type: 'success', 
            formName: 'CreateTFolder', 
            formData: {
                
             }
         }, {})
    
    ;
    
    private getThemesDemo = 
    // TODO
    
    // log myname + '.getThemesDemo',
    async (request: Request, response: Response) => 
    
        renderPackiPageForm(request, response, {
            type: 'success', 
            formName: 'ThemeDemo', 
            formData: {
                
             }
         }, {})
    
    ;
}
