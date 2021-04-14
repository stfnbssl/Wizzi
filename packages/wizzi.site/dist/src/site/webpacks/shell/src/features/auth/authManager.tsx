/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\features\auth\authManager.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import ExtendableError from 'es6-error';
import {getAuthStorageKey} from './config';
import {StorageHandler} from '../storage/index';
import {Auth0UserData, Auth0TokenData} from './types';

export default class AuthenticationManager {
        constructor() {
            this.topLevelDomainCookie = new StorageHandler();
            this.legacyCookie = new StorageHandler();
            // Migrate legacy cookies from 'io.expo.auth' to 'io.expo.auth.snack.legacy'
            this.migrateLegacyCookies([
                'sessionSecret', 
                'tokenData'
            ])
            this.isLegacyLogoutEnabled = !!(this.legacyCookie.getItem('sessionSecret') ?? this.legacyCookie.getItem('tokenData'));
        }
        private topLevelDomainCookie: StorageHandler;
        private legacyCookie: StorageHandler;
        public isLegacyLogoutEnabled: boolean;
        private profilePromise?: Promise<Auth0UserData | null | undefined>;
        private migrateLegacyCookies(names: string[]) {
            names.forEach((name) => {
            
                const value = this.topLevelDomainCookie.getItem(name);
                if (value) {
                    // When a cookie is found, it is unknown whether the cookie
                    // was stored by the top-level domain (expo.io), or by the Snack
                    // web-app itself (snack.expo.io).
                    // In this case, we attempt to delete the cookie. If the removal
                    // was succesful, the cookie was not from the top-level domain, but
                    // in fact a legacy cookie from snack.expo.io. In that case, move
                    // the cookie to a legacy bucket so its easier to detect.
                    this.topLevelDomainCookie.removeItem(name);
                    const newValue = this.topLevelDomainCookie.getItem(name);
                    if (!newValue) {
                        this.legacyCookie.setItem(name, value);
                    }
                    else {
                        if (this.legacyCookie.getItem(name)) {
                            this.legacyCookie.removeItem(name);
                        }
                    }
                }
            }
            )
        }
        private getCookie(name: string):  string | null | undefined {
            return this.topLevelDomainCookie.getItem(name) ?? this.legacyCookie.getItem(name);
        }
        async getProfile() {
            if (this.profilePromise) {
                return this.profilePromise;
            }
            this.profilePromise = this._getUserProfile();
            try {
                const profile = await this.profilePromise;
                this.profilePromise = undefined;
                return profile;
            } 
            catch (err) {
                this.profilePromise = undefined;
                throw err;
            } 
        }
        async legacyLogout() {
            this.clearLegacyTokenData();
            this.clearLegacySessionSecretData();
            this.isLegacyLogoutEnabled = false;
        }
        get sessionSecret():  string | null {
            const rawSessionData = this.getCookie('sessionSecret');
            if (!rawSessionData) {
                return null;
            }
            try {
                const sessionSecret = JSON.parse(rawSessionData);
                if (Date.now() >= sessionSecret.expires_at) {
                    throw new Error();
                }
                return JSON.stringify(sessionSecret);
            } 
            catch (e) {
                this.clearLegacySessionSecretData();
                return null;
            } 
        }
        private clearLegacySessionSecretData() {
            this.legacyCookie.removeItem('sessionSecret');
        }
        get accessToken():  string | null {
            const tokenData = this.getTokenData();
            if (tokenData) {
                if (this.isTokenValid(tokenData)) {
                    return tokenData.access_token;
                }
                this.clearLegacyTokenData();
                return null;
            }
            return null;
        }
        get idToken():  string | null {
            const tokenData = this.getTokenData();
            if (tokenData) {
                if (this.isTokenValid(tokenData)) {
                    return tokenData.id_token;
                }
                this.clearLegacyTokenData();
                return null;
            }
            return null;
        }
        private isTokenValid(tokenData: Auth0TokenData):  boolean {
            return Date.now() < tokenData.expires_at;
        }
        private getTokenData():  Auth0TokenData | undefined | null {
            const rawTokenData = this.getCookie('tokenData');
            if (rawTokenData) {
                try {
                    return JSON.parse(rawTokenData);
                } 
                catch (e) {
                    return null;
                } 
            }
            return null;
        }
        private clearLegacyTokenData() {
            this.legacyCookie.removeItem('tokenData');
        }
        _getUserProfile = _handleApiErrors(async () => {
        
            
            // if auth0 token set and session secret is missing, return null
            const {
                idToken, 
                sessionSecret
             } = this;
            if (!idToken && !sessionSecret) {
                return null;
            }
            const result: { 
                data?: Auth0UserData;
            } = await _performApiRequest(`userInfo`, null, {
                    method: 'GET', 
                    headers: {
                        ...((sessionSecret ? {
                                    'Expo-Session': sessionSecret
                                 } : {}))
                        , 
                        ...((idToken ? {
                                    Authorization: `Bearer ${idToken}`
                                 } : {}))
                        
                     }
                 });
            return result.data;
        }
        );
    }

function _handleApiErrors<F extends Function>(fn: F):  F {

    
    // @ts-ignore
    return async (args) => { 
            const ourFault = 'Something on our end broke! We are so sorry about this. Try again later';
            try {
                const response: any = await fn(...args);
                if (!response) {
                    throw new GenericError();
                }
                if (!!response.errors && response.errors.length) {
                    const error = response.errors[0];
                    const errorMessage = error.details ? error.details.message : error.message;
                    throw new ApiError();
                }
                return response;
            } 
            catch (e) {
                if (e instanceof ApiError || e instanceof GenericError) {
                    throw e// eslint-disable-next-line @typescript-eslint/no-throw-literal
                    ;
                }
                throw new GenericError();
            } 
        }
    ;
    
}

// 
async function _performApiRequest<T>(route: string, body: object | null, options?: { 
    method: 'GET' | 'POST';
    headers?: { 
        [key: string]: string;
    };
}):  Promise<T> {

    const customHeaders = options?.headers ?? {};
    if (options) {
        delete options.headers
    }
    
    const response = await fetch(`${process.env.API_SERVER_URL}/--/api/v2/auth/${route}`, {
            method: 'POST', 
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json', 
                ...customHeaders
             }, 
            body: body && JSON.stringify({
                ...body
             }), 
            ...((options ?? {}))
            
         });
    return response.json();
}

class GenericError extends ExtendableError {
}

class ApiError extends ExtendableError {
}
