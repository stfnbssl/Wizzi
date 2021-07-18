/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\packi\controllers\packiEditing.tsx.ittf
    utc time: Sun, 18 Jul 2021 15:08:53 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
import {artifactApi, tFolderApi} from '../../production';
import EditorDocument from '../../../pages/EditorDocument';
import PackiItemList from '../components/PackiItemList';
const myname = 'features/packi/controller/packiEditing';

function renderPackiEditor(req: Request, res: Response, packiItemObject: object, loggedUser: object, queryParams: object) {

    const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
    <EditorDocument
     data={packiItemObject} queryParams={queryParams} loggedUser={loggedUser} />
    ));
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', index.length.toString());
    res.send(index);
}

export class PackiEditingController implements ControllerType {
    
    public path = '/~~';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering PackiEditingController.initialize');
        this.router.get('/:userid', this.getPackiItemList);
        this.router.get('/a/:userid/:name', this.getPackiArtifactProductionByUsername_Name);
        this.router.get('/a/:userid/:name/*', this.getPackiArtifactProductionByUsername_Name);
        this.router.get('/t/:userid/:name', this.getPackiTFolderByUsername_Name);
        this.router.get('/t/:userid/:name/*', this.getPackiTFolderByUsername_Name);
    };
    
    private getPackiItemList = async (request: Request, response: Response) => {
    
        return response.redirect('/productions/artifacts');
    }
    ;
    
    private getPackiArtifactProductionByUsername_Name = 
    // TODO
    async (request: Request, response: Response) => {
    
        console.log(myname + '.getPackiArtifactProductionByUsername_Name', request.path);
        const queryParams = {};
        const parts = request.path.split('/');
        console.log(myname + '.getPackiArtifactProductionByUsername_Name', parts[1], parts.slice(2).join('/'));
        artifactApi.getArtifactProductionObject(parts[2], parts.slice(3).join('/')).then((result: any) => {
        
            console.log(myname + '.getPackiArtifactProductionByUsername_Name.result', result);
            const user = (request.session as any).user;
            const loggedUser = {
                id: user._id, 
                username: user.username, 
                displayName: user.name, 
                picture: user.avatar_url
             };
            renderPackiEditor(request, response, {
                type: 'success', 
                packi: {
                    _id: result._id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description, 
                    mainIttf: result.mainIttf, 
                    wizziSchema: result.wizziSchema, 
                    packiFiles: result.packiFiles, 
                    packiProduction: 'artifact'
                 }
             }, loggedUser, queryParams)
        }
        ).catch((err: any) => {
        
            console.log('getPackiArtifactProductionByUsername_Name.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
    
    private getPackiTFolderByUsername_Name = 
    // TODO
    async (request: Request, response: Response) => {
    
        console.log(myname + '.getPackiTFolderByUsername_Name', request.path);
        const queryParams = {};
        const parts = request.path.split('/');
        console.log(myname + '.getPackiTFolderByUsername_Name', parts[1], parts.slice(2).join('/'));
        tFolderApi.getTFolderObject(parts[2], parts.slice(3).join('/')).then((result: any) => {
        
            console.log(myname + '.getPackiTFolderByUsername_Name.result', result);
            const user = (request.session as any).user;
            const loggedUser = {
                id: user._id, 
                username: user.username, 
                displayName: user.name, 
                picture: user.avatar_url
             };
            renderPackiEditor(request, response, {
                type: 'success', 
                packi: {
                    _id: result._id, 
                    owner: result.owner, 
                    name: result.name, 
                    description: result.description, 
                    packiFiles: result.packiFiles, 
                    packiProduction: 'tfolder'
                 }
             }, loggedUser, queryParams)
        }
        ).catch((err: any) => {
        
            console.log('getPackiTFolderByUsername_Name.error', err);
            sendFailure(response, {
                err: err
             }, 501)
        }
        )
    }
    ;
}
