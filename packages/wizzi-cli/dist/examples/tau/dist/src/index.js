/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\examples\tau\.wizzi\src\index.js.ittf
    utc time: Wed, 17 Feb 2021 17:02:45 GMT
*/
'use strict';
// import 'babel-polyfill'
import {config} from './features/config/index.js';
import {siteControllers} from './site/index.js';
import {appMiddlewares} from './middlewares/index.js';
import App from './App.js';
async function start() {
    let middlewares = [
        ...appMiddlewares
    ];
    let controllers = [
        ...siteControllers
    ];
    console.log('Starting app. Config:', config);
    const appInitializer = {
        config, 
        controllers, 
        middlewares
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
