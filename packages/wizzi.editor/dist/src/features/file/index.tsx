/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\features\file\index.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import {TextFileEntry, AssetFileEntry, FolderEntry, FileSystemEntry, FileSystemEntryDiff} from './types';
import {isInsideFolder, getParentPath, changeParentPath, getUniquePath, isEntryPoint, isPackageJson, isESLintConfig, isImage, isScript, isJson, isJS, isTS, isTest} from './fileUtilities';
import getFileLanguage from './getFileLanguage';
import getFilesFromQuery from './getFilesFromQuery';
import {getRelativePath, getBasePath, getAbsolutePath} from './path';
import {dragEventIncludes} from './dragUtilities';
import * as fileConversions from './convertFileStructure';

export type {TextFileEntry, AssetFileEntry, FolderEntry, FileSystemEntry, FileSystemEntryDiff};

export {isInsideFolder, getParentPath, changeParentPath, getUniquePath, isEntryPoint, isPackageJson, isESLintConfig, isImage, isScript, isJson, isJS, isTS, isTest, getFileLanguage, getFilesFromQuery, getRelativePath, getBasePath, getAbsolutePath, dragEventIncludes, fileConversions};
