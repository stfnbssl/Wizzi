/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\utils\detectPlatform.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/

export function isAndroid(userAgent: string) {

    return /Android/i.test(userAgent);
}

export function isIOS(userAgent: string) {

    return /iPhone|iPad|iPod/i.test(userAgent);
}

export function isMobile(userAgent: string = typeof navigator !== 'undefined' ? navigator.userAgent : '') {

    return isAndroid(userAgent) || isIOS(userAgent);
}
