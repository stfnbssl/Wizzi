/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\webpack.config.js.ittf
    utc time: Wed, 14 Apr 2021 15:53:05 GMT
*/
'use strict';
import path from 'path';
const webpack = require('webpack');
export const config = {
    mode: "development", 
    resolve: {
        extensions: [
            ".tsx", 
            ".ts", 
            ".js"
        ]
     }, 
    entry: path.resolve(__dirname, './src/index.tsx'), 
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: [
                            '@babel/preset-env', 
                            '@babel/preset-react', 
                            '@babel/preset-typescript'
                        ], 
                        plugins: [
                            '@babel/plugin-syntax-dynamic-import', 
                            '@babel/plugin-proposal-class-properties'
                        ]
                     }
                 }
             }, 
            {
                test: /\.(css|scss)$/, 
                use: [
                    "css-loader"
                ]
             }, 
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf)$/, 
                use: [
                    "file-loader"
                ]
             }
        ]
     }, 
    plugins: [
        new webpack.ContextReplacementPlugin(/monaco-editor(\\|\/)esm(\\|\/)vs(\\|\/)editor(\\|\/)common(\\|\/)services/)
    ], 
    output: {
        path: path.resolve(__dirname, 'static'), 
        filename: 'shell.bundle.js', 
        publicPath: '/webpacks/shell'
     }, 
    devtool: 'cheap-module-source-map'
 };
