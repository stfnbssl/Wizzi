/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\middlewares\ittfStatic.ts.ittf
    utc time: Thu, 01 Apr 2021 15:10:45 GMT
*/
import util from 'util';
import path from 'path';
import fs from 'fs';
import stringify from 'json-stringify-safe';
import parseUrl from 'parseurl';
import {Application, RequestHandler, Request, Response} from 'express';
import {MiddlewareType} from '../features/app/types';
import {config} from '../features/config';
import {wizziProds} from '../features/wizzi';
import {WizziModel} from 'wizzi';
export const IttfStaticMiddleware: MiddlewareType = (app: Application) => {
    console.log('IttfStaticMiddleware. Folder served from ', path.resolve(__dirname, '..', '..', 'ittf'));
    app.use('/ittf', ittfMiddleware(path.resolve(__dirname, '..', '..', 'ittf'), '/ittf'));
}
;
const extContentTypeMap: { 
    [k: string]: string;
} = {
    '.css': 'text/css', 
    '.gif': 'image/gif', 
    '.html': 'text/html', 
    '.jpeg': 'image/jpeg', 
    '.jpg': 'image/jpg', 
    '.js': 'text/javascript', 
    '.json': 'application/json', 
    '.png': 'image/png', 
    '.scss': 'text/scss', 
    '.svg': 'image/svg+xml', 
    '.ttf': 'application/x-font-ttf', 
    '.txt': 'text/plain', 
    '.vtt': 'text/vtt', 
    '.woff': 'application/x-font-woff', 
    '.yaml': 'text/yanl', 
    '.yml': 'text/yanl', 
    '.xml': 'text/xml'
 };

function contentTypeFor(file: string):  string | undefined {
    const nameParts = path.basename(file).split('.');
    if (nameParts[nameParts.length - 1] === 'ittf') {
        return extContentTypeMap['.' + nameParts[nameParts.length - 2]];
    }
    return undefined;
}

// 
function ittfMiddleware(basePath: string, routePath: string):  RequestHandler {
    return async (req: Request, res: Response, next: Function) => {
            if (req.method !== 'GET' && req.method !== 'HEAD') {
                return next();
            }
            const parsedUrl = parseUrl(req);
            if (!parsedUrl || !parsedUrl.pathname) {
                return next();
            }
            const urlPathName = decodeURIComponent(parsedUrl.pathname);
            // ??? urlPathName.substr(routePath.length);
            const pathname = urlPathName;
            // ??? urlPathName.substr(routePath.length);
            const filePath = path.join(basePath, pathname);
            const extname = path.extname(filePath);
            var queryMeta = (req.query.meta as string);
            console.log('middleware.ittfStatic', 'urlPathName', urlPathName, 'pathname', pathname, 'filePath', filePath, 'path.extname(filePath)', path.extname(filePath), 'queryMeta', queryMeta);
            if (fs.existsSync(filePath) === false) {
                console.log('filePath do not exists', filePath);
                return next();
            }
            if (fs.statSync(filePath).isDirectory()) {
                console.log('filePath is directory', filePath);
                return sendFolderScan(filePath, basePath, queryMeta, res);
            }
            let contentType = contentTypeFor(filePath);
            console.log('contentType', contentType);
            if (contentType) {
                if (queryMeta && queryMeta === 'html') {
                    try {
                        const documentState = await wizziProds.scanIttfDocument(filePath, path.dirname(basePath));
                        // console.log('generated.meta.document', generated.artifactContent);
                        const generated = await wizziProds.generateArtifactFs(config.metaHtmlIttfPath, {
                                wizzischema: 'html', 
                                path: filePath, 
                                req, 
                                ds: documentState
                             });
                        // console.log('generated.meta.document', generated.artifactContent);
                        res.writeHead(200, {
                            'Content-Type': 'text/html', 
                            'Content-Length': generated.artifactContent.length
                         })
                        res.end(generated.artifactContent);
                    } 
                    catch (ex) {
                        sendError(res, ex, {
                            format: 'json'
                         })
                    } 
                }
                return contextLoader(filePath, req, function(err: any, modelContext: WizziModel) {
                        if (err) {
                            return sendError(res, err, {
                                    format: 'json'
                                 });
                        }
                        wizziProds.generateArtifactFs(filePath, modelContext).then((generated) => {
                            console.log('generated.artifactContent', generated.artifactContent);
                            res.writeHead(200, {
                                'Content-Type': contentType, 
                                'Content-Length': generated.artifactContent.length
                             })
                            res.end(generated.artifactContent);
                        }
                        ).catch((err) => {
                            return sendError(res, err, {
                                    format: 'json'
                                 });
                        }
                        )
                    });
            }
            // 
            next();
        }
    ;
}
// 
type contextRequest = { 
    name?: string;
    type?: string;
    exportName: string;
    fullPath: any;
    relPath: any;
};
async function contextLoader(resourceFilePath: string, req: Request, callback: any) {
    const contextRequest: string = (req.query._context as string);
    if (contextRequest && contextRequest.length > 0) {
        const ss = contextRequest.split(';');
        const requests: contextRequest[] = [];
        ss.forEach((element) => {
            const request: contextRequest = {
                exportName: element, 
                fullPath: undefined, 
                relPath: undefined
             };
            const type_path = (req.query['_' + element] as string);
            console.log('contextLoader exportName, type_path', element, type_path);
            if (!type_path) {
                return (callback({
                        requestedResource: resourceFilePath, 
                        message: 'Missing query param for requested context model: ' + element
                     }));
            }
            const tp = type_path.split(';');
            request.type = tp[0];
            if (tp.length < 2) {
                request.relPath = './index.' + tp[0] + '.ittf';
            }
            else {
                request.relPath = tp[1];
            }
            console.log('contextLoader exportName, type_path, relPath', element, type_path, request.relPath);
            if (request.type === 'cheatsheet') {
                request.name = request.relPath;
                requests.push(request);
            }
            else {
                request.fullPath = path.join(path.dirname(resourceFilePath), request.relPath);
                requests.push(request);
            }
            console.log('contextLoader request', request);
        }
        )
        console.log('contextLoader.requests', requests);
        const resultContext: { 
            [k: string]: WizziModel;
        } = {};
        const repeatCount = requests.length;
        const repeat = (index: number) => {
            if (index == repeatCount) {
                return callback(null, resultContext);
            }
            const request = requests[index];
            if (request.type === 'cheatsheet') {
                return callback('Context loader for cheatsheet type not implemented.');
            }
            else {
                wizziProds.loadModelFs(request.fullPath, {}).then((model) => {
                    resultContext[request.exportName] = model;
                    repeat(index + 1);
                }
                ).catch(err => 
                    callback(err)
                )
            }
        }
        ;
        repeat(0);
    }
    else {
        try {
            const twinJsonContext = await wizziProds.inferAndLoadContextFs(resourceFilePath, 'mpage');
            return (callback(null, twinJsonContext));
        } 
        catch (ex) {
            return callback(ex);
        } 
    }
}

async function sendFolderScan(folderPath: string, root: string, meta: string, res: Response) {
    try {
        const folderState = await wizziProds.scanIttfFolder(folderPath, path.dirname(root));
        console.log('sendFolderScan', 'folderState.keys', Object.keys(folderState));
        if (meta === 'json') {
            return sendJSONStringified(res, folderState);
        }
        else {
            // console.log('generated.meta.document', generated.artifactContent);
            const generated = await wizziProds.generateArtifactFs(config.metaFolderIttfPath, {
                    wizzischema: 'html', 
                    path: folderPath, 
                    fs: folderState
                 });
            // console.log('generated.meta.document', generated.artifactContent);
            res.writeHead(200, {
                'Content-Type': 'text/html', 
                'Content-Length': generated.artifactContent.length
             })
            res.end(generated.artifactContent);
        }
    } 
    catch (ex) {
        console.log('sendFolderScan.exception', ex);
        sendError(res, ex, {
            format: 'json'
         })
    } 
}

function sendJSONStringified(res: Response, wizziModelInstance: any) {
    res.send('<pre>' + stringify(cleanCircular(wizziModelInstance, []), null, 2) + '</pre>');
}

function cleanCircular(obj: any, stock: any[]) {
    if (!obj) {
        return ;
    }
    if (stock.indexOf(obj) >= 0) {
        return ;
    }
    else {
        stock.push(obj);
    }
    if (typeof obj === 'object') {
        if (obj.length) {
            (obj as []).forEach(element => 
                cleanCircular(element, stock)
            )
            return ;
        }
        if (obj.parent) {
            delete obj.parent
        }
        if (obj.wzParent) {
            delete obj.wzParent
        }
        if (obj.nodes) {
            delete obj.nodes
        }
        if (obj.evalContext) {
            delete obj.evalContext
        }
        if (obj.loadContext && obj.sourceKey) {
            delete obj.loadContext
        }
        for (var k in obj) {
            var item = obj[k];
            if (!item) {
                delete obj[k]
            }
            else {
                if (typeof item === 'object' && item.length && item.length == 0) {
                    delete obj[k]
                }
                else {
                    cleanCircular(item, stock);
                }
            }
        }
    }
    return obj;
}

function sendError(res: Response, err: any, options: any) {
    options = options || {};
    const code = options.code || 999;
    let errEmit: any = err;
    delete errEmit.__is_error
    if (options.format === 'string') {
        if (typeof err !== 'string') {
            err = util.inspect(err, {
                depth: null
             });
        }
        errEmit = err.replace(RegExp('\n', 'g'), '<br>');
    }
    else {
        if (err.stack && err.stack.split) {
            const stackArray: string[] = [];
            (err.stack as string).split('\n').forEach(element => 
                stackArray.push('    ' + element)
            )
            errEmit.stack = stackArray;
        }
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(stringify({
        code, 
        error: errEmit
     }, null, 4))
}
