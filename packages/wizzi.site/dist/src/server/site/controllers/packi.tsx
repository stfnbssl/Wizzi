/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\site\controllers\packi.tsx.ittf
    utc time: Mon, 03 May 2021 18:21:11 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import ReactDOMServer from 'react-dom/server';
function Hello() {

    return  (
        <div
        >
            <h1
            >
            Server rendered
            </h1>
            <h3
            >
            Hello world
            </h3>
        </div>
        )
    ;
}

export class PackiController implements ControllerType {
    
    public path = '/packi';
    
    public router = Router();
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering PackiController.initialize');
        this.router.get(`/`, this.index);
    };
    
    private index = async (request: Request, response: Response) => {
    
        const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
        <Hello
         />
        ));
        sendHtml(response, index)
    }
    ;
}
