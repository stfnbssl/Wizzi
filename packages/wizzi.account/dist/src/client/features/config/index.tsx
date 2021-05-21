/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\features\config\index.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import {ConfigType} from './types';
import * as defaults from './defaults';

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'local';

const VERSION = process.env.VERSION ? process.env.VERSION : '0.0.1';

let _config: ConfigType;

function getConfig() {

    if (_config == null) {
        _config = {
            SERVER_URL: 'http://localhost:3900', 
            API_URL: 'http://localhost:3900/api/v1', 
            AUTH_URL: 'http://localhost:3900/api/v1/auth', 
            AUTH_PROVIDERS_URL: 'http://localhost:3900/auth', 
            VERSION, 
            DEFAULT_DATA_NAME: defaults.DEFAULT_DATA_NAME, 
            DEFAULT_METADATA_NAME: defaults.DEFAULT_DATA_NAME, 
            DEFAULT_METADATA_DESCRIPTION_SAVED: defaults.DEFAULT_DATA_NAME, 
            DEFAULT_METADATA_DESCRIPTION_EMPTY: defaults.DEFAULT_METADATA_DESCRIPTION_EMPTY, 
            DEFAULT_DESCRIPTION: defaults.DEFAULT_DESCRIPTION, 
            DEFAULT_ACCOUNT: defaults.DEFAULT_ACCOUNT, 
            PREFERENCES_KEY: 'wizzi.account.preferences.config'
         };
        console.log('features.config', _config);
    }
    return _config;
}

export const config: ConfigType = getConfig();
export default config;
