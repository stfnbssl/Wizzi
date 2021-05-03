/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\features\auth\login.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:27 GMT
*/
import {getReloadURL} from '../../utils/reloadURL';

type LoginHrefOptions = { 
    saveToAccount?: boolean;
};

export function getLoginHref(options?: LoginHrefOptions) {

    const reloadURL = getReloadURL({
        hideQueryParams: 'true', 
        ...((options?.saveToAccount ? {
                    saveToAccount: 'true'
                 } : {}))
        
     });
    return `${process.env.SERVER_URL}/login?redirect_uri=${encodeURIComponent(reloadURL)}`;
}
