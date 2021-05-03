/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\features\auth\types.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:20 GMT
*/
import {Viewer} from '../account';
export type AuthProps = { 
    legacyLogout?: () => Promise<void>;
    getSessionSecret: () => string;
    setMetadata: (metadata: { 
        appetizeCode: string;
    }) => Promise<void>;
    viewer?: Viewer | undefined;
    dispatch: (action: { 
        type: 'UPDATE_VIEWER';
        viewer: Viewer | null | undefined;
    }) => void;
};

export type Auth0UserData = { 
    name: string;
    username: string;
    id: string;
    given_name: string;
    family_name: string;
    nickname: string;
    picture: string;
    updated_at: string;
    email: string;
    email_verified: string;
    nonce: string;
    iss: string;
    sub: string;
    aud: string;
    exp: string;
    iat: string;
    ['https://expo.io/isOnboarded']: boolean;
};
export type Auth0TokenData = { 
    access_token: string;
    expires_in: number;
    expires_at: number;
    scope: string;
    state: string;
    id_token: string;
    token_type: 'Bearer';
    sessionSecret: string;
};
