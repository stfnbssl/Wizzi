/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\site\controllers\packi.tsx.ittf
    utc time: Fri, 04 Jun 2021 20:07:21 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../utils/sendResponse';
import {StyleSheetServer} from 'aphrodite';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router-dom';
import fetch from 'node-fetch';
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import {PreferencesProvider} from '../../../client/features/preferences/';
import {SavedPacki, QueryParams, RouterData, PackiDefaults} from '../../../client/features/packi/';
import ClientRouter from '../../../client/components/Router';
import ThemeProvider from '../../../client/components/ThemeProvider';
import {__INITIAL_DATA__, __TEST_LOGGED_USER__} from '../../../client/initialData';
import createStore from '../../../client/store/createStore';
import Document from '../pages/Document';
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
        this.router.get('/:@username/:projectName', this.index);
        this.router.get('/:id', this.index);
        this.router.get('*', this.index);
    };
    
    private index = async (request: Request, response: Response) => {
    
        const id = request.params ? request.params.id ? request.params.id : request.params.username && request.params.projectName ? `@${request.params.username}/${encodeURIComponent(request.params.projectName)}` : undefined : undefined;
        console.log('packi.index.handler', 'id', id);
        const splitTestSettings = __INITIAL_DATA__.splitTestSettings;
        let data: RouterData;
        let queryParams: QueryParams = request.query;
        const defaults: PackiDefaults = {
            name: 'TODO'
         };
        console.log('packi.index.handler', 'defaults', defaults);
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
                         }, 
                        defaults
                     };
                }
                else {
                    data = {
                        type: 'success', 
                        packi: json.packi as SavedPacki, 
                        defaults
                     };
                }
            } 
            catch (error) {
                data = {
                    type: 'error', 
                    error: {
                        message: error.message
                     }, 
                    defaults
                 };
            } 
            console.log('packi.index.handler', 'data', data);
        }
        else {
            if (request.body) {
                queryParams = {
                    ...request.body, 
                    ...queryParams
                 };
            }
            data = {
                type: 'success', 
                defaults
             };
            console.log('packi.index.handler', 'data', data);
        }
        const store = createStore({
            app: {
                loggedUser: __TEST_LOGGED_USER__.loggedUser
             }, 
            packi: {
                loading: false
             }, 
            wizzi: {
                loading: false, 
                jobError: undefined, 
                generatedArtifact: undefined, 
                jobGeneratedArtifacts: {
                    
                 }, 
                timedServices: {
                    
                 }
             }, 
            splitTestSettings, 
            viewer: null
         });
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
        <Document 
            id={id}
            data={data}
            queryParams={queryParams}
            content={StyleSheetServer.renderStatic(() => {
                
                    return ReactDOMServer.renderToString(
                        <React.Fragment
                        >
                            <Provider
                             store={store}>
                                <PreferencesProvider
                                 cookies={cookies} queryParams={queryParams}>
                                    <ThemeProvider
                                    >
                                        <StaticRouter
                                         location={request.url} context={context}>
                                            <ClientRouter
                                             data={data} queryParams={queryParams} userAgent={userAgent} />
                                        </StaticRouter>
                                    </ThemeProvider>
                                </PreferencesProvider>
                            </Provider>
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
