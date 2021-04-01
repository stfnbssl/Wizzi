/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\features\config\env.ts.ittf
    utc time: Thu, 01 Apr 2021 15:10:45 GMT
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
        IS_WIZZI_DEV: bool(), 
        PACKI_TEMPLATES_FOLDER: str(), 
        PACKI_API_ENDPOINT: str()
     });
    process.env.PACKI_API_ENDPOINT = checkedEnv.PACKI_API_ENDPOINT;
    console.log('config/env.ts, PACKI_API_ENDPOINT after', process.env.PACKI_API_ENDPOINT);
    return checkedEnv;
}
export const packiFilePrefix = 'json:/';
let config: ConfigType;
export default function create():  ConfigType {
        if (config == null) {
            const checkedEnv = validateEnv();
            const __rootPath = path.join(__dirname, '..', '..', '..');
            const __ittfPath = path.join(__rootPath, 'ittf');
            const __dataPath = path.join(__rootPath, 'data');
            config = {
                port: checkedEnv.PORT, 
                sessionSecret: checkedEnv.SESSION_SECRET, 
                noCache: checkedEnv.NO_CACHE, 
                isWizziDev: checkedEnv.IS_WIZZI_DEV, 
                ittfPath: __ittfPath, 
                dataPath: __dataPath, 
                metaHtmlIttfPath: path.join(__ittfPath, 'meta', 'html', 'index.html.ittf'), 
                metaFolderIttfPath: path.join(__ittfPath, 'meta', 'folder', 'index.html.ittf'), 
                metaHtmlTextPath: path.join(__ittfPath, 'meta', 'text', 'index.html.ittf'), 
                packiTemplatesFolder: checkedEnv.PACKI_TEMPLATES_FOLDER, 
                packiApiEndpoint: checkedEnv.PACKI_API_ENDPOINT
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
