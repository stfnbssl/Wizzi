/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.pageforms\.wizzi\src\components\pageforms\widgets\FormAvatar.tsx.ittf
    utc time: Wed, 30 Jun 2021 15:29:13 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import {c} from '../../ThemeProvider';

export interface FormAvatarProps {
    title: string;
    subtitle?: string;
    avatar_url: string;
}

const StyledImg = styled.img`
    -webkit-border-radius: 50%!important;
    -khtml-border-radius: 50%!important;
    -moz-border-radius: 50%!important;
    -o-border-radius: 50%!important;
    border-radius: 50%!important;
    -webkit-box-shadow: 0 0 0 1px var(--color-avatar-border);
    -moz-box-shadow: 0 0 0 1px var(--color-avatar-border);
    -o-box-shadow: 0 0 0 1px var(--color-avatar-border);
    box-shadow: 0 0 0 1px var(--color-avatar-border);
    display: inline-block;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    line-height: 1;
    overflow: hidden;
    vertical-align: middle;
    
`
export const FormAvatar: FunctionComponent<FormAvatarProps> = ({
    title, 
    subtitle, 
    avatar_url
 }) => {

    return  (
        <StyledImg
         style={{
                height: "auto", 
                width: "260", 
                height: "260"
             }} src={avatar_url} />
        )
    ;
}
;
export default FormAvatar;
