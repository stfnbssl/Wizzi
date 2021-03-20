/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\getRelativePath.ts.ittf
    utc time: Sat, 20 Mar 2021 13:20:47 GMT
*/
//
export default function getRelativePath(source: string, target: string, separator: string = '/') {
        const targetArr = target.split(separator);
        const sourceArr = source.split(separator).slice(0, -1);
        const filename = targetArr.pop();
        const targetPath = targetArr.join(separator);
        let relativePath = '';
        while (targetPath.indexOf(sourceArr.join(separator)) === -1) {
            sourceArr.pop();
            relativePath += '..' + separator;
        }
        const relPathArr = targetArr.slice(sourceArr.length);
        if (relPathArr.length) {
            relativePath += relPathArr.join(separator) + separator;
        }
        if (!relativePath.startsWith('.')) {
            relativePath = './' + relativePath;
        }
        return relativePath + filename;
    }
