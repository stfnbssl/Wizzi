/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\docs\pages\getting-started\firstpacki.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import React from 'react';
import DocsMarkdown from '../../DocsMarkdown';
const content = require('./firstpacki.md');
const title = 'First Packi';
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
