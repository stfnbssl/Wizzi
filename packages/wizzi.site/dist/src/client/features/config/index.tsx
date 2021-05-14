/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\features\config\index.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/
import * as defaults from './defaults';
import {PackiFile} from '../packi';

export type ConfigType = { 
    SERVER_URL: string;
    API_URL: string;
    AUTH_URL: string;
    AUTH_PROVIDERS_URL: string;
    VERSION: string;
    DEFAULT_PACKI_NAME: string;
    DEFAULT_METADATA_NAME: string;
    DEFAULT_METADATA_DESCRIPTION_SAVED: string;
    DEFAULT_METADATA_DESCRIPTION_EMPTY: string;
    DEFAULT_DESCRIPTION: string;
    EDITOR_LOAD_FALLBACK_TIMEOUT: number;
    DEFAULT_CODE: { 
        [path: string]: PackiFile;
    };
    PREFERENCES_KEY: string;
};

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'local';

const VERSION = process.env.VERSION ? process.env.VERSION : '0.0.1';

let _config: ConfigType;

function getConfig() {

    if (_config == null) {
        _config = {
            SERVER_URL: 'http://localhost:5000', 
            API_URL: 'http://localhost:5000/api/v1', 
            AUTH_URL: 'http://localhost:5000/api/v1/auth', 
            AUTH_PROVIDERS_URL: 'http://localhost:5000/auth', 
            VERSION, 
            DEFAULT_PACKI_NAME: defaults.DEFAULT_PACKI_NAME, 
            DEFAULT_METADATA_NAME: defaults.DEFAULT_PACKI_NAME, 
            DEFAULT_METADATA_DESCRIPTION_SAVED: defaults.DEFAULT_PACKI_NAME, 
            DEFAULT_METADATA_DESCRIPTION_EMPTY: defaults.DEFAULT_METADATA_DESCRIPTION_EMPTY, 
            DEFAULT_DESCRIPTION: defaults.DEFAULT_DESCRIPTION, 
            EDITOR_LOAD_FALLBACK_TIMEOUT: defaults.EDITOR_LOAD_FALLBACK_TIMEOUT, 
            DEFAULT_CODE: defaults.DEFAULT_CODE, 
            PREFERENCES_KEY: 'packi.preferences.config'
         };
        console.log('features.config', _config);
    }
    return _config;
}

export const config: ConfigType = getConfig();

export const DEFAULT_PACKI_NAME = config.DEFAULT_PACKI_NAME;
export const DEFAULT_METADATA_NAME = config.DEFAULT_METADATA_NAME;
export const DEFAULT_METADATA_DESCRIPTION_SAVED = config.DEFAULT_METADATA_DESCRIPTION_SAVED;
export const DEFAULT_METADATA_DESCRIPTION_EMPTY = config.DEFAULT_METADATA_DESCRIPTION_EMPTY;
export const DEFAULT_DESCRIPTION = config.DEFAULT_DESCRIPTION;
export const DEFAULT_CODE = config.DEFAULT_CODE;

export default config;
