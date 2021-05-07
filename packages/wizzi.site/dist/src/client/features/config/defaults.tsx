/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\features\config\defaults.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:12 GMT
*/
import {PackiFiles} from '../packi';
export const DEFAULT_PACKI_NAME = 'MyPacki';
export const DEFAULT_METADATA_NAME = 'Packi';
export const DEFAULT_METADATA_DESCRIPTION_SAVED = `... saved packi description ...`;
export const DEFAULT_METADATA_DESCRIPTION_EMPTY = `... empty packi description ...`;
export const DEFAULT_DESCRIPTION = 'No description';
export const EDITOR_LOAD_FALLBACK_TIMEOUT = 3000;
export const DEFAULT_CODE: PackiFiles = {
    '.wizzi/index.html.ittf': {
        contents: `html
  body
    h1 Hello world
  `, 
        type: 'CODE'
     }, 
    '.wizzi/main.js.ittf': {
        contents: `module
  kind es6
  log 'Hello world'
  `, 
        type: 'CODE'
     }, 
    '.wizzi/main.wfjob.ittf': {
        contents: `wfjob
  `, 
        type: 'CODE'
     }, 
    'README.md': {
        contents: `# Sample Packi
  `, 
        type: 'CODE'
     }
 };
