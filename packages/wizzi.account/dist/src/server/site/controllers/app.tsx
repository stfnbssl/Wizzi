/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\site\controllers\app.tsx.ittf
    utc time: Thu, 13 May 2021 19:47:49 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import {StyleSheetServer} from 'aphrodite';
import {StaticRouter} from 'react-router-dom';
import fetch from 'node-fetch';
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import {QueryParams, RouterData} from '../../../client/features/app/';
import {SavedAccount} from '../../../client/features/account/';
import ClientRouter from '../../../client/components/Router';
import AppDocument from '../pages/AppDocument';

export class AppController implements ControllerType {
    
    public path = '/app';
    
    public router = Router();
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering AppController.initialize');
        this.router.get('/:@username/:projectName', this.index);
        this.router.get('/:id', this.index);
        this.router.get('*', this.index);
    };
    
    private index = async (request: Request, response: Response) => {
    
        const id = request.params ? request.params.id ? request.params.id : request.params.username && request.params.projectName ? `@${request.params.username}/${encodeURIComponent(request.params.projectName)}` : undefined : undefined;
        console.log('packi.index.handler', 'id', id);
        let data: RouterData;
        let queryParams: QueryParams = request.query;
        if (id) {
            try {
                const response = await fetch(`${process.env.API_SERVER_URL}/api/v1/packi/${encodeURIComponent(id)}`, {
                        headers: {
                            
                         }
                     });
                const text = await response.text();
                const json = JSON.parse(text);
                if (json.errors?.length) {
                    data = {
                        type: 'error', 
                        error: {
                            message: 'Server returned errors when fetching data'
                         }
                     };
                }
                else {
                    data = {
                        type: 'success', 
                        account: json.account as SavedAccount
                     };
                }
            } 
            catch (error) {
                data = {
                    type: 'error', 
                    error: {
                        message: error.message
                     }
                 };
            } 
            console.log('app.index.handler', 'data', data);
        }
        else {
            if (request.body) {
                queryParams = {
                    ...request.body, 
                    ...queryParams
                 };
            }
            data = {
                type: 'success'
             };
            console.log('app.index.handler', 'data', data);
        }
        const context: { 
            url?: string;
        } = {};
        const cookies = {
            get: (key: string) => {
            
                const result = request.cookies.get(key);
                if (result) {
                    return decodeURIComponent(result);
                }
                return result;
            }
            
         };
        const userAgent = request.headers['user-agent'];
        const index = '<!DOCTYPE html>' + (ReactDOMServer.renderToStaticMarkup(
        <AppDocument 
            id={id}
            isAuthenticated={false}
            data={data}
            queryParams={queryParams}
            content={StyleSheetServer.renderStatic(() => {
                
                    return ReactDOMServer.renderToString(
                        <React.Fragment
                        >
                            <StaticRouter
                             location={request.url} context={context}>
                                <ClientRouter
                                 data={data} queryParams={queryParams} />
                            </StaticRouter>
                        </React.Fragment>
                        );
                }
                )}
         />
        ));
        sendHtml(response, index)
    }
    ;
}
