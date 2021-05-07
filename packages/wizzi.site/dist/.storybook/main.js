/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\storybook\main.js.ittf
    utc time: Fri, 07 May 2021 18:42:14 GMT
*/
'use strict';
module.exports = {
    "stories": [
        "./**/*.stories.mdx", 
        "./**/*.stories.@(js|jsx|ts|tsx)"
    ], 
    "addons": [
        "@storybook/addon-links", 
        "@storybook/addon-essentials"
    ], 
    typescript: {
        check: false, 
        checkOptions: {
            
         }, 
        reactDocgen: 'react-docgen-typescript', 
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true, 
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
         }
     }
 };
