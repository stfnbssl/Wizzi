/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\middlewares\webpackApp.js.ittf
    utc time: Wed, 14 Apr 2021 15:53:05 GMT
*/
'use strict';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import {config as config_hello} from '../site/webpacks/hello/webpack.config.js';
import {config as config_shell} from '../site/webpacks/shell/webpack.config.js';
console.log('WebpackAppMiddleware config_hello', config_hello);
console.log('WebpackAppMiddleware config_shell', config_shell);

export const WebpackAppMiddleware = (app) => {
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
        app.use('/webpacks/hello/dist', express.static(config_hello.output.publicPath))
    }
    else {
        const compiler = webpack(config_hello);
        app.use(webpackDevMiddleware(compiler, {
            writeToDisk: !!false, 
            publicPath: config_hello.output.publicPath
         }))
        console.log('WebpackAppMiddleware.pack hello on path', config_hello.output.publicPath, 'writeToDisk',  !!false);
    }
    if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
        app.use('/webpacks/shell/dist', express.static(config_shell.output.publicPath))
    }
    else {
        const compiler = webpack(config_shell);
        app.use(webpackDevMiddleware(compiler, {
            writeToDisk: !!false, 
            publicPath: config_shell.output.publicPath
         }))
        console.log('WebpackAppMiddleware.pack shell on path', config_shell.output.publicPath, 'writeToDisk',  !!false);
    }
};
