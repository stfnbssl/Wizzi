/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\site\webpacks\blog\webpack.config.js.ittf
    utc time: Tue, 02 Mar 2021 21:04:16 GMT
*/
'use strict';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
/**
    Webpack config file for package BLOG
*/
import path from 'path';
export const config = {
    mode: "development", 
    entry: path.resolve(__dirname, './src/index.js'), 
    module: {
        rules: [
            {
                test: /\.(js)$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', 
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    }, 
    output: {
        path: path.resolve(__dirname, 'static'), 
        filename: 'bundle.js', 
        publicPath: '/webpacks/blog'
    }, 
    resolve: {
        extensions: [
            '.js'
        ]
    }, 
    devtool: 'cheap-module-source-map'
};
