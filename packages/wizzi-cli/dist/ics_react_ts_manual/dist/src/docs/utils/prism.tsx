/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\docs\utils\prism.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
//
import prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-typescript';
let styleNode;
let lightTheme;
let darkTheme;
// if (process.browser) {
lightTheme = require('prismjs/themes/prism.css');
darkTheme = require('prismjs/themes/prism-okaidia.css');
styleNode = document.createElement('style');
styleNode.setAttribute('data-prism', 'true');
document.head.appendChild(styleNode);
// }
export {lightTheme, darkTheme};
export function setPrismTheme(theme) {
    styleNode.textContent = theme;
}
export default prism;
