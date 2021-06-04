/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\middlewares\wizziViewEngine.ts.ittf
    utc time: Fri, 04 Jun 2021 20:07:21 GMT
*/
import path from 'path';
import {Application} from 'express';
import {MiddlewareType} from '../features/app/types';
import {wizziProds} from '../features/wizzi';
export const WizziViewEngineMiddleware: MiddlewareType = (app: Application) => {

    app.engine('ittf', async function(filePath: string, options: any, callback: any) {
    
        try {
            const twinJsonContext = await wizziProds.inferAndLoadContextFs(filePath, 'mpage');
            
            // console.log('WizziViewEngineMiddleware.context', JSON.stringify(context, null, 2));
            const context = {
                ...options, 
                locals: options._locals, 
                ...twinJsonContext
             };
            // console.log('WizziViewEngineMiddleware.context', JSON.stringify(context, null, 2));
            wizziProds.generateArtifactFs(filePath, context).then((generated) => {
            
                return callback(null, generated.artifactContent);
            }
            ).catch((err) => {
            
                return callback(err);
            }
            )
        } 
        catch (ex) {
            callback(ex);
        } 
    })
    const viewsFolder = path.resolve(__dirname, '..', 'site', 'views');
    console.log('WizziViewEngineMiddleware.views folder', viewsFolder);
    // specify the views directory
    app.set('views', viewsFolder);
    // specify the views directory
    // register the template engine
    app.set('view engine', 'ittf');
}
;
