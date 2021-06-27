/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\middlewares\packiBrowse.ts.ittf
    utc time: Fri, 25 Jun 2021 04:12:06 GMT
*/
import util from 'util';
import path from 'path';
import stringify from 'json-stringify-safe';
import parseUrl from 'parseurl';
import {Application, RequestHandler, Request, Response} from 'express';
import wizziProto from 'wizzi.proto';
import {MiddlewareType} from '../features/app/types';
import {config} from '../features/config';
import {sendFailure} from '../utils/sendResponse';

const myname = 'express.middleware.packiBrowse';
const packiUserBrowsePath = '/~';
const packiSiteBrowsePath = '/~-';

export const PackiBrowseMiddleware: MiddlewareType = (app: Application) => {

    app.use(packiUserBrowsePath, packiUserBrowseMiddleware());
    app.use(packiSiteBrowsePath, packiSiteBrowseMiddleware());
    wizziProto.start('stfnbssl', {}, () => {
    
    }
    )
}
;
function packiUserBrowseMiddleware():  RequestHandler {

    return async (request: Request, response: Response, next: Function) => {
        
            if (request.method !== 'GET' && request.method !== 'HEAD') {
                return next();
            }
            const parsedUrl = parseUrl(request);
            if (!parsedUrl || !parsedUrl.pathname) {
                return next();
            }
            console.log(myname + '.parsedUrl', parsedUrl);
            const pathname = decodeURIComponent(parsedUrl.pathname);
            const parts = pathname.split('/');
            const owner = parts[1];
            const packiName = parts.slice(2).join('/');
            console.log(myname + '.owner', owner, 'packiName', packiName, 'context', request.query.context);
            
            wizziProto.getPackiContext(owner, request.query.context as string, wizziProto.getDefaultContext()).then((resultContext) => {
            
                console.log(myname + '.resultContext:', Object.keys(resultContext));
                wizziProto.getPackiGeneration(owner, packiName, resultContext).then((result) => {
                
                    response.status(200);
                    response.set('Content-Type', result.contentType);
                    response.set('Content-Length', result.contentLength.toString());
                    response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
                    response.set('Expires', '-1');
                    response.set('Pragma', 'no-cache');
                    response.send(result.content);
                }
                ).catch((err: any) => {
                
                    console.log(myname + '.getPackiGeneration.err', Object.keys(err));
                    sendFailure(response, err, 501);
                }
                )
            }
            ).catch((err) => {
            
                console.log(myname + '.getPackiContext.err', Object.keys(err));
                sendFailure(response, err, 501);
            }
            )
            
        }
    ;
}
function packiSiteBrowseMiddleware():  RequestHandler {

    return async (request: Request, response: Response, next: Function) => {
        
            if (request.method !== 'GET' && request.method !== 'HEAD') {
                return next();
            }
            const parsedUrl = parseUrl(request);
            if (!parsedUrl || !parsedUrl.pathname) {
                return next();
            }
            console.log(myname + '.parsedUrl', parsedUrl);
            const pathname = decodeURIComponent(parsedUrl.pathname);
            const parts = pathname.split('/');
            const owner = "stfnbssl";
            const packiName = parts.slice(1).join('/');
            console.log(myname + '.owner', owner, 'packiName', packiName, 'context', request.query.context);
            
            wizziProto.getPackiContext(owner, request.query.context as string, wizziProto.getDefaultContext()).then((resultContext) => {
            
                console.log(myname + '.resultContext:', Object.keys(resultContext));
                wizziProto.getPackiGeneration(owner, packiName, resultContext).then((result) => {
                
                    response.status(200);
                    response.set('Content-Type', result.contentType);
                    response.set('Content-Length', result.contentLength.toString());
                    response.set('Cache-Control', 'private, no-cache, no-store, must-revalidate');
                    response.set('Expires', '-1');
                    response.set('Pragma', 'no-cache');
                    response.send(result.content);
                }
                ).catch((err: any) => {
                
                    console.log(myname + '.getPackiGeneration.err', Object.keys(err));
                    sendFailure(response, err, 501);
                }
                )
            }
            ).catch((err) => {
            
                console.log(myname + '.getPackiContext.err', Object.keys(err));
                sendFailure(response, err, 501);
            }
            )
            
        }
    ;
}
