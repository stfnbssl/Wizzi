/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\utils\strings.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
// TODO(jim): Packi and Web should share this file.
export const isEmptyOrNull = (text: string | null | undefined):  text is null | undefined => {
    return !text || !text.trim();
}
;
export const stripProtocol = (text: string) => {
    return text.replace(/(^\w+:|^)\/\//, '');
}
;
export const ellipsize = (text: string, length: number) => {
    return text.substring(0, length) + (text.length > length ? '...' : '');
}
;
export const pluralize = (text: string, count: number) => {
    return count > 1 || count === 0 ? `${text}s` : text;
}
;
export const getRenderedLength = (text: string | null | undefined) => {
    if (isEmptyOrNull(text)) {
        return 0;
    }
    let length = text.length;
    for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i);
        if (code >= 55296 && code <= 57343) {
            length--;
            i++;
        }
    }
    return length;
}
;
