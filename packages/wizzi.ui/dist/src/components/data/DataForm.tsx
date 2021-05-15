/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.ui\.wizzi\src\components\data\DataForm.tsx.ittf
    utc time: Sat, 15 May 2021 12:57:34 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import Box from '../widgets/Box';
import {FormDef} from './types';
import FormControl from './FormControl';
export interface DataFormProps {
    formDef: FormDef;
    values: object;
}

const StyledRoot = styled.div`
    overflow: hidden;
    -webkit-border-radius: 3px;
    -khtml-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    border-radius: 3px;
    background: #fff;
    
`
const StyledTitle = styled.div`
    font-weight: 700;
    
`
const StyledControls = styled.div`
    
`
const StyledButtons = styled.div`
    display: -ms-flexbox;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: space-between;
    -ms-flex-pack: space-between;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    
`
const StyledConfirm = styled.button`
    color: green;
    
`
const StyledCancel = styled.button`
    color: gray;
    
`
export const DataForm: FunctionComponent<DataFormProps> = ({
    formDef, 
    values
 }) => 

     (
    <Box 
        bg='blue.4'
        color='lime.9'
        width='600px'
        p="3"
    >
        <StyledRoot
        >
            <StyledTitle
            >
                { formDef.title }
            </StyledTitle>
            <StyledControls
             id={ formDef.id }>
                {
                    formDef.controls.map((control, ndx) => 
                    
                         (
                        <FormControl
                         key={ndx} control={control} value={values[control.id]} />
                        )
                    
                    )
                }
            </StyledControls>
            <StyledButtons
            >
                <StyledConfirm
                 onClick={() => 
                    
                        alert('Form confirm')
                }>
                    Confirm
                </StyledConfirm>
                <StyledCancel
                 onClick={() => 
                    
                        alert('Form cancel')
                }>
                    Cancel
                </StyledCancel>
            </StyledButtons>
        </StyledRoot>
    </Box>
    )

;
export default DataForm;
