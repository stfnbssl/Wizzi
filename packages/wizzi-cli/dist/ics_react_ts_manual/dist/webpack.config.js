/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\root\webpack.config.js.ittf
    utc time: Fri, 26 Mar 2021 07:40:24 GMT
*/
'use strict';
const path = require('path');
const resolve = path.resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development", 
    entry: [
        './src/index.tsx'
    ], 
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/, 
                exclude: /node_modules/, 
                use: [
                    'babel-loader'
                ]
             }, 
            {
                test: /\.(ts|tsx)$/, 
                exclude: /node_modules/, 
                use: [
                    "ts-loader"
                ]
             }, 
            {
                test: /\.html$/, 
                use: [
                    {
                        loader: "html-loader"
                     }
                ]
             }, 
            {
                test: /\.css$/, 
                use: [
                    'style-loader', 
                    'css-loader'
                ]
             }, 
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/, 
                use: [
                    "file-loader"
                ]
             }
        ]
     }, 
    resolve: {
        modules: [
            path.resolve(__dirname, "src"), 
            "node_modules"
        ], 
        extensions: [
            ".js", 
            ".ts", 
            ".jsx", 
            ".tsx", 
            ".json"
        ], 
        alias: {
            
         }, 
        fallback: {
            
         }
     }, 
    output: {
        path: path.resolve(__dirname, '..', 'dist', 'scripts'), 
        filename: '.js'
     }, 
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', 
            filename: 'index.html'
         })
    ], 
    devtool: 'cheap-module-source-map', 
    devServer: {
        contentBase: path.join(__dirname, 'src')
     }
 };
