/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\index.ts.ittf
    utc time: Wed, 14 Apr 2021 15:53:06 GMT
*/
import {ControllerType, AppInitializerType, MiddlewareType} from './features/app/types';
import {ModelBuilderType} from './features/app';
import {config} from './features/config/index';
import filesystemStart from './services/filesystem';
import wizziStart from './services/wizzi';
import {siteControllers} from './site/index';
import {packiControllers} from './features/packi/index';
import {appMiddlewaresPre, appMiddlewaresPost, auth0Secured} from './middlewares/index';
import App from './App';
async function start() {

    let middlewaresPre: MiddlewareType[] = [
        ...appMiddlewaresPre
    ];
    let middlewaresPost: MiddlewareType[] = [
        ...appMiddlewaresPost
    ];
    let controllers: ControllerType[] = [
        ...siteControllers, 
        ...packiControllers
    ];
    console.log('Starting app. Config:', config);
    const fsDb = await filesystemStart(config);
    await wizziStart(config);
    const appInitializer: AppInitializerType = {
        config, 
        middlewaresPre, 
        controllers, 
        middlewaresPost, 
        fsDb, 
        auth0Secured
     };
    const app = new App(appInitializer);
    app.listen();
}
try {
    start();
} 
catch (ex) {
    console.log(ex);
} 
