/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.ui\.wizzi\src\components\data\DataEntry.tsx.ittf
    utc time: Sat, 15 May 2021 12:57:34 GMT
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';
import {FormDef, ListDef} from './types';
import DataForm from './DataForm';
import DataList from './DataList';

export interface DataEntryProps {
    formDef: FormDef;
    listDef: ListDef;
    items: object[];
}

type DataEntryState = { 
    isEditing: boolean;
    items: object[];
    formValues: object;
};


export class DataEntry extends Component<DataEntryProps, DataEntryState> {
    constructor(props: DataEntryProps) {
        super(props);
        this.state = {
            isEditing: false, 
            formValues: {
                
             }, 
            items: props.items
         };
    }
    handleEdit = (item: object) => {
        this.setState((state) => 
        
            ({
                isEditing: true
             })
        )
        alert('Edit: ' + JSON.stringify(item));
    };
    handleRemove = (item: object) => 
        alert('Remove: ' + JSON.stringify(item));
    render() {
        return  (
            <div
            >
                {
                    this.state.isEditing ?  (
                        <DataForm
                         formDef={this.props.formDef} values={this.state.formValues} />
                        )
                     :  (
                        <DataList 
                            listDef={this.props.listDef}
                            items={this.state.items}
                            onEdit={this.handleEdit}
                            onRemove={this.handleRemove}
                         />
                        )
                    
                }
            </div>
            )
        ;
    }
}
export default DataEntry;
