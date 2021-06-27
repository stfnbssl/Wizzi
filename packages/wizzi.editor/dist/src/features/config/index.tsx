/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\features\config\index.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import * as defaults from './defaults';
import * as sdk from './sdk';
import {PackiFile} from '../packi';

export type ConfigType = { 
    SERVER_URL: string;
    API_URL: string;
    AUTH_URL: string;
    AUTH_PROVIDERS_URL: string;
    DEFAULT_SDK_VERSION: string;
    DEFAULT_PACKI_NAME: string;
    DEFAULT_PACKI_DESCRIPTION_SAVED: string;
    DEFAULT_PACKI_DESCRIPTION_EMPTY: string;
    DEFAULT_PACKI_DESCRIPTION: string;
    EDITOR_LOAD_FALLBACK_TIMEOUT: number;
    DEFAULT_PACKI_DEPENDENCIES: { 
        [path: string]: PackiDependency;
    };
    DEFAULT_PACKI_CODE: { 
        [path: string]: PackiFile;
    };
    PREFERENCES_KEY: string;
};

const ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const PLATFORM = process.env.PLATFORM ? process.env.PLATFORM : 'local';

let _config: ConfigType;

function getConfig() {

    if (_config == null) {
        _config = {
            SERVER_URL: 'http://localhost:5000', 
            API_URL: 'http://localhost:5000/api/v1', 
            AUTH_URL: 'http://localhost:5000/api/v1/auth', 
            AUTH_PROVIDERS_URL: 'http://localhost:5000/auth', 
            versions: sdk.versions, 
            DEFAULT_SDK_VERSION: sdk.DEFAULT_SDK_VERSION, 
            DEFAULT_PACKI_NAME: defaults.DEFAULT_PACKI_NAME, 
            DEFAULT_PACKI_DESCRIPTION_SAVED: defaults.DEFAULT_PACKI_NAME, 
            DEFAULT_PACKI_DESCRIPTION_EMPTY: defaults.DEFAULT_PACKI_DESCRIPTION_EMPTY, 
            DEFAULT_PACKI_DESCRIPTION: defaults.DEFAULT_PACKI_DESCRIPTION, 
            EDITOR_LOAD_FALLBACK_TIMEOUT: defaults.EDITOR_LOAD_FALLBACK_TIMEOUT, 
            DEFAULT_PACKI_DEPENDENCIES: defaults.DEFAULT_PACKI_DEPENDENCIES, 
            DEFAULT_PACKI_CODE: defaults.DEFAULT_PACKI_CODE, 
            PREFERENCES_KEY: 'packi.preferences.config'
         };
        console.log('features.config', _config);
    }
    return _config;
}

export const config: ConfigType = getConfig();

export const DEFAULT_PACKI_NAME = config.DEFAULT_PACKI_NAME;
export const DEFAULT_PACKI_DESCRIPTION_SAVED = config.DEFAULT_PACKI_DESCRIPTION_SAVED;
export const DEFAULT_PACKI_DESCRIPTION_EMPTY = config.DEFAULT_PACKI_DESCRIPTION_EMPTY;
export const DEFAULT_PACKI_DESCRIPTION = config.DEFAULT_PACKI_DESCRIPTION;
export const DEFAULT_PACKI_CODE = config.DEFAULT_PACKI_CODE;

export default config;
