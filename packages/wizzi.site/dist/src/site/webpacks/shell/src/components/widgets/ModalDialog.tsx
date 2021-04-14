/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\widgets\ModalDialog.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

import {ModalSheet} from './ModalSheet';
import {c} from '../ThemeProvider';
type ModalDialogProps = { 
    visible: boolean;
    className?: string;
    onDismiss?: () => void;
    title?: string;
    autoSize?: boolean;
    children: React.ReactNode;
};

interface TitleStyleProps {
    title?: string;
}
interface SheetStyleProps {
    autoSize?: boolean;
}
const StyledModalSheet = styled(ModalSheet)<SheetStyleProps>`
    
`
const StyledTitle = styled.div<TitleStyleProps>`
    height: 72px;
    font-size: 24px;
    width: 100%;
    line-height: 24px;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    border-bottom: ${props => "1px solid " + c('border')};
`
const StyledContent = styled.div<TitleStyleProps>`
    padding: ${props => props.title ? "16px 24px 24px 24px" : "24px"};
    overflow: 'auto';
`
export const ModalDialog: FunctionComponent<ModalDialogProps> = ({
    visible, 
    className, 
    onDismiss, 
    title, 
    autoSize, 
    children
 }) => 

     (
    <StyledModalSheet 
        autoSize={autoSize}
        className={className}
        visible={visible}
        onDismiss={onDismiss}
    >
        {
            title ?  (
                <StyledTitle
                 title={title}>
                    {title}
                </StyledTitle>
                )
             : null
        }
        <StyledContent
         title={title}>
            {children}
        </StyledContent>
    </StyledModalSheet>
    )

;
