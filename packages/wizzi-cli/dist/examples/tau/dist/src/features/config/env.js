/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\examples\tau\.wizzi\src\features\config\env.js.ittf
    utc time: Wed, 17 Feb 2021 17:02:45 GMT
*/
'use strict';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
let config = null;
function validateEnv() {
    return {
            PORT: 5000, 
            SESSION_SECRET: "axr45hngmuoil9********0ofgt*kjj6767648%$£3f5&/4bnsa-----qq4)$35670qq4q", 
            CORS_CLIENT_ORIGIN: "http://localhost:8080"
        };
}
export default function create() {
    if (config == null) {
        const __ittfPath = path.join(__dirname, '..', '..', '..', '..', 'ittf');
        const checkedEnv = validateEnv();
        config = {
            port: checkedEnv.PORT, 
            sessionSecret: checkedEnv.SESSION_SECRET, 
            mongoPath: checkedEnv.MONGO_PATH, 
            mongoUser: checkedEnv.MONGO_USER, 
            mongoPassword: checkedEnv.MONGO_PASSWORD, 
            githubClientID: checkedEnv.GITHUB_CLIENT_ID, 
            githubClientSecret: checkedEnv.GITHUB_CLIENT_SECRET, 
            githubCallbackURL: checkedEnv.GITHUB_CALLBACK_URL, 
            corsClientOrigin: checkedEnv.CORS_CLIENT_ORIGIN, 
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