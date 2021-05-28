/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\root\webpack.config.js.ittf
    utc time: Sun, 23 May 2021 13:31:29 GMT
*/
'use strict';
const path = require('path');
const resolve = path.resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
    // eslint-disable import/no-commonjs
*/
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
// Needed no more see https://github.com/GoogleChromeLabs/worker-plugin/issues/88
// const WorkerPlugin = require('worker-plugin')
module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development', 
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-source-map', 
    entry: [
        './src/client/index.tsx'
    ], 
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/, 
                exclude: /(node_modules|(vendor\/.+\.js))/, 
                use: {
                    loader: 'babel-loader', 
                    options: {
                        cacheDirectory: true
                     }
                 }
             }, 
            {
                test: /\.(ts|tsx)?$/, 
                exclude: /(node_modules|(vendor\/.+\.js))/, 
                use: {
                    loader: 'babel-loader', 
                    options: {
                        cacheDirectory: true
                     }
                 }
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
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ]
             }, 
            {
                test: /\.scss$/, 
                exclude: /(node_modules)/, 
                use: [
                    'sass-loader'
                ]
             }, 
            {
                test: /\.(jpg|jpeg|png|gif|mp3|svg|ttf)$/, 
                use: {
                    loader: "file-loader", 
                    options: {
                        outputPath: 'assets/'
                     }
                 }
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
        
        // https://github.com/Khan/aphrodite#disabling-important
        alias: {
            aphrodite: 'aphrodite/no-important'
         }, 
        fallback: {
            
         }
     }, 
    output: {
        globalObject: 'self', 
        path: path.resolve(__dirname, 'dist'), 
        filename: '[name].bundle.js', 
        chunkFilename: '[id].[hash].chunk.js'
     }, 
    
    // Needed no more see https://github.com/GoogleChromeLabs/worker-plugin/issues/88
    
    // new WorkerPlugin()
    plugins: [
        new webpack.IgnorePlugin(/^((fs)|(path)|(os)|(crypto)|(source-map-support))$/, /vs(\/|\\)language(\/|\\)typescript(\/|\\)lib/), 
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({
            template: './src/client/index.html', 
            filename: 'index.html'
         })
    ], 
    devServer: {
        contentBase: path.join(__dirname, 'src')
     }
 };
