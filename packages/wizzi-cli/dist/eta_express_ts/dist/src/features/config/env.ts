/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\features\config\env.ts.ittf
    utc time: Wed, 31 Mar 2021 20:00:35 GMT
*/
import path from 'path';
import dotenv from 'dotenv';
import {cleanEnv, str, bool, port} from 'envalid';
import {ConfigType} from './types';
function validateEnv() {
    dotenv.config();
    let checkedEnv = cleanEnv(process.env, {
        PORT: port(), 
        SESSION_SECRET: str(), 
        NO_CACHE: bool(), 
        IS_WIZZI_DEV: bool()
     });
    return checkedEnv;
}
let config: ConfigType;
export default function create():  ConfigType {
        const __ittfPath = path.join(__dirname, '..', '..', '..', 'ittf');
        if (config == null) {
            const checkedEnv = validateEnv();
            config = {
                port: checkedEnv.PORT, 
                sessionSecret: checkedEnv.SESSION_SECRET, 
                noCache: checkedEnv.NO_CACHE, 
                IsWizziDev: checkedEnv.IS_WIZZI_DEV, 
                MetaHtmlIttfPath: path.join(__ittfPath, 'meta', 'html', 'index.html.ittf'), 
                MetaFolderIttfPath: path.join(__ittfPath, 'meta', 'folder', 'index.html.ittf'), 
                MetaHtmlTextPath: path.join(__ittfPath, 'meta', 'text', 'index.html.ittf')
             };
            Object.keys(config).forEach((element) => {
                if (element.indexOf("Pass") < 0 && element.indexOf("Secr") < 0) {
                    console.log('Created config', element, (config as any)[element])
                }
            }
            )
        }
        return config;
    }
