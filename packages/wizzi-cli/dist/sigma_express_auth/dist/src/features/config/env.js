/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\sigma_express_auth\.wizzi\src\features\config\env.js.ittf
    utc time: Sat, 06 Mar 2021 13:38:40 GMT
*/
'use strict';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import dotenv from 'dotenv';
import {cleanEnv, str, bool, port} from 'envalid';
let config = null;
function validateEnv() {
    dotenv.config();
    let checkedEnv = cleanEnv(process.env, {
        PORT: port(), 
        SESSION_SECRET: str(), 
        AUTH0_ISSUER_BASE_URL: str(), 
        AUTH0_CLIENT_ID: str(), 
        AUTH0_BASE_URL: str(), 
        AUTH0_SECRET: str(), 
        GITHUB_CLIENT_ID: str(), 
        GITHUB_CLIENT_SECRET: str(), 
        GITHUB_CALLBACK_URL: str()
    });
    return checkedEnv;
}
export default function create() {
    if (config == null) {
        const __ittfPath = path.join(__dirname, '..', '..', '..', '..', 'ittf');
        const checkedEnv = validateEnv();
        config = {
            port: checkedEnv.PORT, 
            sessionSecret: checkedEnv.SESSION_SECRET, 
            auth0IssuerBaseURL: checkedEnv.AUTH0_ISSUER_BASE_URL, 
            auth0ClientID: checkedEnv.AUTH0_CLIENT_ID, 
            auth0BaseURL: checkedEnv.AUTH0_BASE_URL, 
            auth0Secret: checkedEnv.AUTH0_SECRET, 
            githubClientID: checkedEnv.GITHUB_CLIENT_ID, 
            githubClientSecret: checkedEnv.GITHUB_CLIENT_SECRET, 
            githubCallbackURL: checkedEnv.GITHUB_CALLBACK_URL, 
            MetaHtmlIttfPath: path.join(__ittfPath, 'meta', 'html', 'index.html.ittf'), 
            MetaFolderIttfPath: path.join(__ittfPath, 'meta', 'folder', 'index.html.ittf'), 
            MetaHtmlTextPath: path.join(__ittfPath, 'meta', 'text', 'index.html.ittf')
        };
        Object.keys(config).forEach((element) => {
            if (element.indexOf("Pass") < 0 && element.indexOf("Secr") < 0) {
                console.log('Created config', element, config[element]);
            }
        })
    }
    return config;
}
