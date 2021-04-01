/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\services\wizzi\index.ts.ittf
    utc time: Thu, 01 Apr 2021 15:10:45 GMT
*/
import * as path from 'path';
import * as wizzi from 'wizzi';
import {ConfigType} from '../../features/config';
import wizzifile from './wizzifile';
export default async function start(config: ConfigType):  Promise<void> {
        return new Promise((resolve, reject) => {
                wizzifile.setAppConfig(config)
                console.log('wizzifile', wizzifile);
                wizzi.startRunnerServer({
                    cwd: __dirname, 
                    userid: 'stefi', 
                    role: 'admin', 
                    wizzifile
                 }, function(err) {
                    if (err) {
                        return reject(err);
                    }
                    resolve();
                })
            }
            );
    }
