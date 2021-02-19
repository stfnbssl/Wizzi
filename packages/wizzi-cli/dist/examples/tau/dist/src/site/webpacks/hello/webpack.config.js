/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\examples\tau\.wizzi\src\site\webpacks\hello\webpack.config.js.ittf
    utc time: Fri, 19 Feb 2021 10:35:17 GMT
*/
'use strict';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
import path from 'path';
export const config = {
    mode: "development", 
    entry: path.resolve(__dirname, './src/index.js'), 
    module: {
        rules: [
            {
                test: /\.(js)$/, 
                exclude: /node_modules/, 
                use: [
                    'babel-loader'
                ]
            }
        ]
    }, 
    output: {
        path: path.resolve(__dirname, 'static'), 
        filename: 'bundle.js', 
        publicPath: '/webpacks/hello'
    }, 
    devtool: 'cheap-module-source-map'
};
