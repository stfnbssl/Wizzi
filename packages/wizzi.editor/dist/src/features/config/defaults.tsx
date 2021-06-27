/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.editor\.wizzi\src\features\config\defaults.tsx.ittf
    utc time: Sun, 27 Jun 2021 11:22:09 GMT
*/
import {PackiFiles} from '../packi';
export const DEFAULT_PACKI_NAME = 'starter/packi.html';
export const DEFAULT_PACKI_DESCRIPTION_SAVED = `... saved packi description ...`;
export const DEFAULT_PACKI_DESCRIPTION_EMPTY = `... empty packi description ...`;
export const DEFAULT_PACKI_DESCRIPTION = 'No description';
export const DEFAULT_PACKI_DEPENDENCIES = {
    'starter.html': {
        version: '0.0.1', 
        isUserSpecified: true
     }
 };
export const DEFAULT_PACKI_CODE: PackiFiles = {
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
export const EDITOR_LOAD_FALLBACK_TIMEOUT = 3000;
