/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\data\FormControl.tsx.ittf
    utc time: Tue, 25 May 2021 15:10:47 GMT
*/
import React, {FunctionComponent} from 'react';
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';

import {c} from '../AphroditeTheme';
import Select, {ValueType} from "react-select";
import {SelectOption, ControlDef} from './types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import it from 'date-fns/locale/it';
registerLocale('it', it);

export interface FormControlProps {
    control: ControlDef;
    value: any;
    error?: any;
    onChange: (value: any) => void;
}

const styles = StyleSheet.create({
    root: {
        textAlign: "left", 
        padding: "5px"
     }, 
    required: {
        position: 'relative', 
        "& :after": {
            content: "'*'", 
            marginLeft: "2px", 
            color: "#b90000"
         }
     }, 
    input: {
        outline: 0, 
        fontSize: 12, 
        borderRadius: 3, 
        padding: '6px 7px 6px 7px', 
        lineHeight: '12px', 
        width: '100%', 
        borderWidth: 1, 
        borderStyle: 'solid', 
        backgroundColor: c('error'), 
        normal: {
            borderColor: c('border'), 
            ':focus': {
                borderColor: c('selected')
             }
         }, 
        error: {
            borderColor: c('error')
         }
     }
 });
export const FormControl: FunctionComponent<FormControlProps> = ({
    control, 
    value, 
    error, 
    onChange
 }) => {

    function pad(s: number) {
    
        return (s < 10) ? '0' + s : s;
    }
    // log 'handleChange', 'event', event
    function handleChange(event: any) {
    
        if (control.controlType == 'text' || control.controlType == 'string') {
            onChange(event.target.value);
        }
        else if (control.controlType == 'checkbox' || control.controlType == 'boolean') {
            onChange(event.target.checked);
        }
        else if (control.controlType == 'select') {
            onChange(event ? event.value : undefined);
        }
        else if (control.controlType == 'date') {
            onChange([
                pad(event.getDate()), 
                pad(event.getMonth() + 1), 
                event.getFullYear()
            ].join('/'))
        }
        else if (control.controlType == 'folder') {
            console.log('event.target.files', event.target.files);
            const value = {};
            const promises = [];
            [...event.target.files].forEach(file => 
            
                promises.push(file.text().then((text) => {
                
                    value[file.webkitRelativePath] = text;
                    console.log('file', file.webkitRelativePath, text);
                }
                )
                )
            )
            Promise.all(promises).then(() => {
            
                console.log('folder.value', value);
                onChange(JSON.stringify(value));
            }
            )
        }
    }
    let selectValue = null;
    let dateValue = null;
    if (control.controlType == 'select' && control.options) {
        var i, i_items=control.options, i_len=control.options.length, option;
        for (i=0; i<i_len; i++) {
            option = control.options[i];
            if (option.value == value) {
                selectValue = option;
            }
        }
    }
    
    // log 'date value', value
    if (control.controlType == 'date') {
        if (value) {
            const parts = value.split('/');
            dateValue = new Date(parts[2] + '/' + parts[1] + '/' + parts[0]);
        }
    }
    return  (
        <div
         className={css(styles.root)}>
            <div
             className={control.required ? css(styles.required) : ''}>
                { control.label || control.id }
            </div>
            {
                (control.controlType == 'text' || control.controlType == 'string')
                 &&  (
                    <input 
                        type="text"
                        className={css(styles.input, (error ? styles.error : styles.normal))}
                        value={value}
                        onChange={handleChange}
                     />
                    )
                
            }
            {
                (control.controlType == 'checkbox' || control.controlType == 'boolean')
                 &&  (
                    <input
                     type="checkbox" checked={value} onChange={handleChange} />
                    )
                
            }
            {
                control.controlType == 'select'
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
                control.controlType == 'date'
                 &&  (
                    <DatePicker 
                        selected={dateValue}
                        onChange={handleChange}
                        locale='it'
                        dateFormat='dd/MM/yyyy'
                     />
                    )
                
            }
            {
                control.controlType == 'folder'
                 &&  (
                    <input 
                        type='file'
                        webkitdirectory='true'
                        multiple={true}
                        onChange={handleChange}
                     />
                    )
                
            }
        </div>
        )
    ;
}
;
export default FormControl;
