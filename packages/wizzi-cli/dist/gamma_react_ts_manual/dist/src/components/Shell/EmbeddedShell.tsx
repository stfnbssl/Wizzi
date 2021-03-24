/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\Shell\EmbeddedShell.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
*/
import * as React from 'react';
import ProgressIndicator from '../shared/ProgressIndicator';
import ContentShell from './ContentShell';
import EditorShell from './EditorShell';
import EmbeddedToolbarShell from './EmbeddedToolbarShell';
import EmbeddedFooterShell from './EmbeddedFooterShell';
export default function AppShell() {
        return  (
            <ContentShell>
                <ProgressIndicator delay={1000} />
                <EmbeddedToolbarShell />
                <EditorShell />
                <EmbeddedFooterShell />
            </ContentShell>
            )
        ;
    }
