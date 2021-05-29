/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\index.ts.ittf
    utc time: Sat, 29 May 2021 11:12:38 GMT
*/
import {ControllerType, AppInitializerType, MiddlewareType} from './features/app/types';
import {ModelBuilderType} from './features/app';
import {config} from './features/config/index';
import { mongodbStart } from './services/mongodb';
import wizziStart from './services/wizzi';
import {authenticationControllers, authenticationModelBuilders} from './features/auth/index';
import {siteControllers} from './site/index';
import {packiControllers} from './features/packi/index';
import {appMiddlewaresPre, appMiddlewaresPost, auth0Secured} from './middlewares/index';
import App from './App';
async function start() {

    let modelBuilders: ModelBuilderType[] = [
        ...authenticationModelBuilders
    ];
    await mongodbStart(config, modelBuilders);
    
    let middlewaresPre: MiddlewareType[] = [
        ...appMiddlewaresPre
    ];
    let middlewaresPost: MiddlewareType[] = [
        ...appMiddlewaresPost
    ];
    let controllers: ControllerType[] = [
        ...siteControllers, 
        ...authenticationControllers, 
        ...packiControllers
    ];
    console.log('Starting app. Config:', config);
    await wizziStart(config);
    const appInitializer: AppInitializerType = {
        config, 
        middlewaresPre, 
        controllers, 
        middlewaresPost, 
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
