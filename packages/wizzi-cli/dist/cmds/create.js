/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\.wizzi\cmds\create.js.ittf
*/
'use strict';
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const wizzi = require('wizzi');
const newpkg = require("./newpkg");
module.exports = (args) =>
    newpkg((err, answers) => {
        console.log('create.answers', answers);
        wizzi.model(path.join(__dirname, '..', 'resources', 'create', 'contexts', answers.pkg_type + ".json.ittf"), {
            answers: answers
        }, (err, jsonctx) => {
            console.log('create.jsonctx', jsonctx);
            wizzi.genFolder(path.join(__dirname, '..', 'resources', 'create', 'templates', answers.pkg_type), {
                ctx: jsonctx
            }, {
                destFolder: path.join(process.cwd(), answers.pkg_name), 
                copyInclude: ['*'], 
                copyExclude: []
            }, function(err, genFolderResult) {
                if (err) {
                    console.log('Test error >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                    console.log('err', err);
                    throw new Error(err.message);
                }
                console.log('genFolderResult', genFolderResult);
            });
        });
    });
