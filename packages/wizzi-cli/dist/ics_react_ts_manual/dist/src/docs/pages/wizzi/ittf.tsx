/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\docs\pages\wizzi\ittf.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
import React from 'react';
import DocsMarkdown from '../../DocsMarkdown';
const content = require('./ittf.md');
const title = 'Ittf';
type Props = { 
    location: any;
};
function Page(props: Props) {
    return  (
        <DocsMarkdown title={title} content={content} location={props.location} />
        )
    ;
}
export default Page;
