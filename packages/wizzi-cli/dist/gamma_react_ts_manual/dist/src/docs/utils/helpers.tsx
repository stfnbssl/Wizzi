/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\docs\utils\helpers.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
export function titleize(string: string) {
    return string.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ')
    ;
}
export function pageToTitle(page: any) {
    if (page.title === false) {
        return null;
    }
    if (page.title) {
        return page.title;
    }
    const name = page.pathname.replace(/.*\//, '');
    if (page.pathname.indexOf('/api/') !== -1) {
        return upperFirst(camelCase(name));
    }
    return titleize(name);
}
