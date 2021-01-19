/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi\.wizzi\ittf\examples\light\index.js.ittf
*/
'use strict';
var path = require('path');
var stringify = require('json-stringify-safe');
var wizzi = require('../../index');
var htmlFriendsPath = path.join(__dirname, 'ittf', 'mtree', 'friends.html.ittf');
var friendsArray = [
    'arthur', 
    'mary'
];
var schemaFriendsPath = path.join(__dirname, 'ittf', 'schemas', 'friends.wfschema.ittf');
var schemaFriendsOutputPath = path.join(__dirname, 'friendsplugin');
var jobsPath = path.join(__dirname, 'ittf', 'jobs');
var genFolderPath = path.join(__dirname, 'ittf', 'genfolder', 'index.js.ittf');
var genFolderDest = path.join(__dirname, 'genfolder_out');
var modelsComplexPath = path.join(__dirname, 'ittf', 'models', 'complex');
