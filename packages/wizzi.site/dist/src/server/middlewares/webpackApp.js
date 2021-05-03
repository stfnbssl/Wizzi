/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\middlewares\webpackApp.js.ittf
    utc time: Mon, 03 May 2021 18:21:09 GMT
*/
'use strict';
import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import {config as config_hello} from '../site/webpacks/hello/webpack.config.js';
console.log('WebpackAppMiddleware config_hello', config_hello);

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
}
;
