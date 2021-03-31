/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\docs\utils\textToHash.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
function makeUnique(hash: string, unique: { 
}, i = 1) {
    const uniqueHash = i === 1 ? hash : `${hash}-${i}`;
    if (!unique[uniqueHash]) {
        unique[uniqueHash] = true;
        return uniqueHash;
    }
    return makeUnique(hash, unique, i + 1);
}
export default function textToHash(text: string, unique = {}) {
        return makeUnique(encodeURI(// eslint-disable-next-line no-useless-escape
            text.toLowerCase().replace(/=&gt;|&lt;| \/&gt;|<code>|<\/code>|&#39;/g, '')// eslint-disable-next-line no-useless-escape
            .replace(/[!@#\$%\^&\*\(\)=_\+\[\]{}`~;:'"\|,\.<>\/\?\s]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
            ), unique);
    }
