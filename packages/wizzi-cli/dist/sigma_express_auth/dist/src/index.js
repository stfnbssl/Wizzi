/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\index.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
// import 'babel-polyfill'
import {config} from './features/config/index.js';
import {authenticationControllers} from './features/auth/index.js';
import {accountControllers, accountModelBuilders} from './features/account/index.js';
import {siteControllers} from './site/index.js';
import {appMiddlewaresPre, appMiddlewaresPost} from './middlewares/index.js';
import App from './App.js';
async function start() {
    let middlewaresPre = [
        ...appMiddlewaresPre
    ];
    let middlewaresPost = [
        ...appMiddlewaresPost
    ];
    let controllers = [
        ...siteControllers, 
        ...authenticationControllers, 
        ...accountControllers
    ];
    console.log('Starting app. Config:', config);
    const appInitializer = {
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
