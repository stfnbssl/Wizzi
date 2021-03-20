/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\fileUtilities.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
import escapeRegExp from 'escape-string-regexp';
import {FileSystemEntry, TextFileEntry} from './types';
export function isInsideFolder(path: string, folderPath: string) {
    return path.startsWith(`${folderPath}/`);
}
export function getParentPath(path: string):  string | undefined {
    return path.includes('/') ? path.replace(/\/[^/]+$/, '') : undefined;
}
export function changeParentPath(path: string, oldParentPath: string, newParentPath: string) {
    return path.replace(new RegExp('^' + escapeRegExp(oldParentPath + '/')), newParentPath + '/');
}
export function getUniquePath(allPaths: string[], suggestedPath: string, initialSuffix?: string) {
    const parts = suggestedPath.includes('.') ? suggestedPath.split('.') : undefined;
    const ext = parts ? parts.pop() : '';
    const initialPath = parts ? parts.join('.') : suggestedPath;
    let path = suggestedPath;
    let counter = initialSuffix ? 0 : 1;
    while (allPaths.some(p => p.toLowerCase() === path.toLowerCase())) {
        const suffix = `${initialSuffix || ''} ${counter || ''}`.trim()
        ;
        if (ext) {
            path = `${initialPath} ${suffix}.${ext}`;
        }
        else {
            path = `${initialPath} ${suffix}`;
        }
        counter++;
    }
    return path;
}
export function isEntryPoint(name: string):  boolean {
    return /^App\.(js|tsx?)$/.test(name);
}
export function isPackageJson(name: string):  boolean {
    return name === 'package.json';
}
export function isESLintConfig(name: string):  boolean {
    return /^\.eslintrc(\.json)?$/.test(name);
}
export function isImage(name: string):  boolean {
    return /\.(bmp|jpg|jpeg|png|gif|svg)$/.test(name);
}
export function isScriptFile(entry: FileSystemEntry | undefined):  entry is TextFileEntry {
    return entry != null && entry.item.type === 'file' && !entry.item.asset && /\.(js|tsx?)$/.test(entry.item.path);
}
export function isJSFile(entry: FileSystemEntry | undefined):  entry is TextFileEntry {
    return entry != null && entry.item.type === 'file' && !entry.item.asset && entry.item.path.endsWith('.js');
}
export function isJSONFile(entry: FileSystemEntry | undefined):  entry is TextFileEntry {
    return entry != null && entry.item.type === 'file' && !entry.item.asset && entry.item.path.endsWith('.json');
}
