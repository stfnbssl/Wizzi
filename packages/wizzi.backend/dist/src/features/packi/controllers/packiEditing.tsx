/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\packi\controllers\packiEditing.tsx.ittf
    utc time: Wed, 07 Jul 2021 15:52:37 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
import wizziProto from 'wizzi.proto';
import EditorDocument from '../pages/EditorDocument';
import PackiItemList from '../components/PackiItemList';
const myname = 'features/packi/controller/packiEditing';

function renderPackiEditor(req: Request, res: Response, packiItemObject: object, queryParams: object) {

    const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
    <EditorDocument
     data={packiItemObject} queryParams={queryParams} />
    ));
    res.set('Content-Type', 'text/html');
    res.set('Content-Length', index.length.toString());
    console.log("renderPackiEditor.before sending", index.length);
    res.send(index);
    console.log("renderPackiEditor.after sending");
}

export class PackiEditingController implements ControllerType {
    
    public path = '/~~';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering PackiEditingController.initialize');
        wizziProto.start('stfnbssl', {}, () => {
        
        }
        )
        this.router.get('/:userid', this.getPackiItemList);
        this.router.get('/:userid/:name', this.getPackiEditorByUserid_Name);
        this.router.get('/:userid/:name/*', this.getPackiEditorByUserid_Name);
    };
    
    private getPackiItemList = async (request: Request, response: Response) => 
    
        wizziProto.getPackiList(request.params.userid).then((list) => {
        
            const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
            <html
            >
                <body
                >
                    <PackiItemList
                     items={list} />
                </body>
            </html>
            ));
            response.set('Content-Type', 'text/html');
            response.set('Content-Length', index.length.toString());
            response.send(index);
        }
        ).catch((err: any) => {
        
            console.log(myname + '.getPackiItemList.err', Object.keys(err));
            sendFailure(response, err, 501);
        }
        )
    
    ;
    
    private getPackiEditorByUserid_Name = 
    // TODO
    
    // log myname + '.getPackiEditorByUserid_Name', request
    async (request: Request, response: Response) => {
    
        const queryParams = {};
        const parts = request.path.split('/');
        wizziProto.getPackiItem_Object_By_Owner_Name(parts[1], parts.slice(2).join('/')).then((result: object) => 
        
            renderPackiEditor(request, response, {
                type: 'success', 
                packi: result
             }, queryParams)
        ).catch((err: any) => {
        
            console.log(myname + '.getPackiEditorByUserid_Name.err', Object.keys(err));
            sendFailure(response, err, 501);
        }
        )
    }
    ;
}
