/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\_old_App.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

import {LayoutShell} from './shell/LayoutShell';
import {ToolbarShell} from './shell/ToolbarShell';
import {ToolbarTitleShell} from './shell/ToolbarTitleShell';
import {ContentShell} from './shell/ContentShell';
import {SidebarShell} from './shell/SidebarShell';
import {EditorShell} from './shell/EditorShell';
import {PreviewShell} from './shell/PreviewShell';
import {FooterShell} from './shell/FooterShell';
import {ProgressIndicator} from './widgets/ProgressIndicator';
import {Button} from './widgets/Button';
import {ModalDialog} from './widgets/ModalDialog';
import {ThemeName} from './ThemeProvider';
type AppProps = { 
    previewShown: boolean;
    title: string;
};

const StyledLogo = styled.div`
    background-color: 'currentColor';
    opacity: 0.2;
    -webkit-border-radius: 3px;
    -khtml-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    width: 24px;
    height: 24px;
    margin-left: 16px;
    margin-right: 16px;
    
`
const StyledHeader = styled.div`
    min-width: 0;
    margin-right: 16px;
    
`
const StyledTitle = styled.h1`
    font-size: '1.3em';
    line-height: '1.3em';
    font-weight: 600;
    margin: 0;
    padding: 1px 6px;
    
`
const StyledStatus = styled.div`
    fontSize: 12px;
    margin: 0 6px;
    opacity: 0.5;
    
`
const StyledSaveButton = styled(Button)`
    width: 80px;
    height: 40px;
    pointer-events: none;
    
`
const StyledAvatar = styled.div`
    background-color: currentColor;
    opacity: 0.2;
    height: 26px;
    width: 26px;
    -webkit-border-radius: 13px;
    -khtml-border-radius: 13px;
    -moz-border-radius: 13px;
    -o-border-radius: 13px;
    border-radius: 13px;
    margin: 0 16px;
    
`
export const App: FunctionComponent<AppProps> = ({
    previewShown, 
    title
 }) => {

    var theme: ThemeName = 'dark';
    return  (
        <ContentShell
         theme={theme}>
            <ProgressIndicator
             delay={1000} />
            <ToolbarShell
             theme={theme}>
                <h1
                >
                Toolbar
                </h1>
                <ToolbarTitleShell
                >
                    <StyledLogo
                     />
                    <StyledHeader
                    >
                        <StyledTitle
                        >
                            {title ?? 'packy'}
                        </StyledTitle>
                        <StyledStatus
                        >
                            …
                        </StyledStatus>
                    </StyledHeader>
                </ToolbarTitleShell>
                <StyledSaveButton
                 variant="secondary" onClick={() => {
                    
                        console.log('App button clicked');
                    }
                }>
                    {'\u00A0'}
                </StyledSaveButton>
                <StyledAvatar
                 />
            </ToolbarShell>
            <LayoutShell
             theme={theme}>
                <SidebarShell
                 theme={theme}>
                    <h1
                    >
                    Sidebar
                    </h1>
                </SidebarShell>
                <EditorShell
                 theme={theme}>
                    <h1
                    >
                    Editor
                    </h1>
                    <ModalDialog
                     autoSize={false} visible={true}>
                        <div
                        >
                            <h1
                            >
                            Test modal
                            </h1>
                        </div>
                    </ModalDialog>
                </EditorShell>
                {
                    previewShown
                     &&  (
                        <PreviewShell
                         />
                        )
                    
                }
            </LayoutShell>
            <FooterShell
             />
        </ContentShell>
        )
    ;
}
;
