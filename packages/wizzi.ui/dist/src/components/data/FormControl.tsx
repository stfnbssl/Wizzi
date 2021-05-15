/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.ui\.wizzi\src\components\data\FormControl.tsx.ittf
    utc time: Sat, 15 May 2021 12:57:34 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

export interface FormControlProps {
    control: ControlDef;
    value: any;
}

const StyledRoot = styled.div`
    text-align: left;
    padding: 5px;
    
`
const StyledLabel = styled.div<FormControlProps>`
    position: ${props => props.control.required ? 'relative' : 'inherit'};
    ${props => {
        if (props.control.required) {
            return css`
                &:after {
                    content: '*';
                    margin-left: 2px;
                    color: #b90000;
                }
                
            `
        }
        
    }}
`
const StyledText = styled.input.attrs(
    (props) => 
    
        ({
            type: 'text'
         })
)`
    
`
const StyledCheckBox = styled.input.attrs(
    (props) => 
    
        ({
            type: 'checkbox'
         })
)`
    
`
export const FormControl: FunctionComponent<FormControlProps> = ({
    control, 
    value
 }) => 

     (
    <StyledRoot
    >
        <StyledLabel
         control={control}>
            { control.label || control.id }
        </StyledLabel>
        {
            control.type == 'text'
             &&  (
                <StyledText
                 value={value} />
                )
            
        }
        {
            control.type == 'checkbox'
             &&  (
                <StyledCheckBox
                 value={value} />
                )
            
        }
    </StyledRoot>
    )

;
export default FormControl;
