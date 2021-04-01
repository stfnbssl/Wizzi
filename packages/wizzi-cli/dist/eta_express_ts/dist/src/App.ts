/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\App.ts.ittf
    utc time: Thu, 01 Apr 2021 15:10:45 GMT
*/
import express from 'express';
import {AppInitializerType} from './features/app';
import {ConfigType} from './features/config';
import fs from 'fs';
import https from 'https';

const ssl_key = fs.readFileSync('server.key');
const ssl_cert = fs.readFileSync('server.cert');

class App {
    constructor(initValues: AppInitializerType) {
        
        this.config = initValues.config;
        this.port = this.config.port;
        this.app = express();
        this.server = https.createServer({
            key: ssl_key, 
            cert: ssl_cert
         }, this.app);
        
        initValues.middlewaresPre.forEach(middleware => 
            middleware(this.app)
        )
        
        initValues.controllers.forEach((controller) => {
            console.log('installing router on path: ', controller.path);
            controller.initialize(initValues);
            this.app.use(controller.path, controller.router);
        }
        )
        
        initValues.middlewaresPost.forEach(middleware => 
            middleware(this.app)
        )
    }
    public app: express.Application;
    public config: ConfigType;
    public port: number;
    public server: any;
    public listen(port?: number) {
        var usedPort = port || this.port;
        this.server.listen(usedPort, () => 
            console.log(`App listening at https://localhost:${usedPort}`)
        )
    }
}
export default App;
