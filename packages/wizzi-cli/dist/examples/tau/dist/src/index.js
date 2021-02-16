/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\examples\tau\.wizzi\src\index.js.ittf
    utc time: Tue, 16 Feb 2021 20:56:05 GMT
*/
'use strict';
import 'babel-polyfill';
import {config} from './features/config';
import {appMiddlewares} from './middleware';
import App from './App';
async function start() {
    let middlewares = [
        ...appMiddlewares
    ];
    let controllers = [];
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
