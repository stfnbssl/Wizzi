/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\packi\validations.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
export const validatePackiName = (name: string) => 
    name ? /^[a-z_\-\.\d\s]+$/i.test(name) ? null : new Error('Name can only contain letters, numbers, space, hyphen (-), dot (.) and underscore (_).') : new Error('Name cannot be empty.')
;
