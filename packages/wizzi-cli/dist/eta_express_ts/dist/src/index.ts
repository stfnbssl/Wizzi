/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\index.ts.ittf
    utc time: Thu, 01 Apr 2021 15:10:45 GMT
*/
import {ControllerType, AppInitializerType, MiddlewareType} from './features/app/types';
import {ModelBuilderType} from './features/app';
import {config} from './features/config/index';
import wizziStart from './services/wizzi';
import {siteControllers} from './site/index';
import {appMiddlewaresPre, appMiddlewaresPost} from './middlewares/index';
import App from './App';
async function start() {
    let middlewaresPre: MiddlewareType[] = [
        ...appMiddlewaresPre
    ];
    let middlewaresPost: MiddlewareType[] = [
        ...appMiddlewaresPost
    ];
    let controllers: ControllerType[] = [
        ...siteControllers
    ];
    console.log('Starting app. Config:', config);
    await wizziStart(config);
    const appInitializer: AppInitializerType = {
        config, 
        middlewaresPre, 
        controllers, 
        middlewaresPost
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
