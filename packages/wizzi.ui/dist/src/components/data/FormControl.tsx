/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.ui\.wizzi\src\components\data\FormControl.tsx.ittf
    utc time: Tue, 18 May 2021 13:32:19 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import Select, {ValueType} from "react-select";
import {SelectOption, ControlDef} from './types';
import DatePicker from "react-datepicker";
require("react-datepicker/dist/react-datepicker.css");
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import it from 'date-fns/locale/it';
registerLocale('it', it);
export interface FormControlProps {
    control: ControlDef;
    value: any;
    onChange: (value: any) => void;
}

interface StyledControlProps {
    control: ControlDef;
}
const StyledRoot = styled.div`
    text-align: left;
    padding: 5px;
    
`
const StyledLabel = styled.div<StyledControlProps>`
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
    value, 
    onChange
 }) => {

    function pad(s: number) {
    
        return (s < 10) ? '0' + s : s;
    }
    function handleChange(event: any) {
    
        console.log('handleChange', 'event', event);
        if (control.type == 'text') {
            onChange(event.target.value);
        }
        else if (control.type == 'checkbox') {
            onChange(event.target.checked);
        }
        else if (control.type == 'select') {
            onChange(event ? event.value : undefined);
        }
        else if (control.type == 'date') {
            onChange([
                pad(event.getDate()), 
                pad(event.getMonth() + 1), 
                event.getFullYear()
            ].join('/'))
        }
    }
    let selectValue = null;
    let dateValue = null;
    if (control.type == 'select' && control.options) {
        var i, i_items=control.options, i_len=control.options.length, option;
        for (i=0; i<i_len; i++) {
            option = control.options[i];
            if (option.value == value) {
                selectValue = option;
            }
        }
    }
    if (control.type == 'date') {
        console.log('date value', value);
        if (value) {
            const parts = value.split('/');
            dateValue = new Date(parts[2] + '/' + parts[1] + '/' + parts[0]);
        }
    }
    return  (
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
                     value={value} onChange={handleChange} />
                    )
                
            }
            {
                control.type == 'checkbox'
                 &&  (
                    <StyledCheckBox
                     checked={value} onChange={handleChange} />
                    )
                
            }
            {
                control.type == 'select'
                 &&  (
                    <Select<SelectOption> 
                        value={selectValue}
                        getOptionLabel={(option: SelectOption) => 
                            
                                option.label
                        }
                        getOptionValue={(option: SelectOption) => 
                            
                                option.value
                        }
                        options={control.options}
                        isClearable={true}
                        backspaceRemovesValue={true}
                        onChange={handleChange}
                     />
                    )
                
            }
            {
                control.type == 'date'
                 &&  (
                    <DatePicker 
                        selected={dateValue}
                        onChange={handleChange}
                        locale='it'
                        dateFormat='dd/MM/yyyy'
                     />
                    )
                
            }
        </StyledRoot>
        )
    ;
}
;
export default FormControl;
