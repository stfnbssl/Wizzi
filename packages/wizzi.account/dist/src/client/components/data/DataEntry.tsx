/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\data\DataEntry.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
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
    idCounter: number;
    items: object[];
    workItems: object[];
    formValues: object;
};

const StyledRoot = styled.div`
    border: 1px solid #ff0000;
    padding: 20px;
    
`
const StyledAdd = styled.button`
    color: green;
    
`

export class DataEntry extends Component<DataEntryProps, DataEntryState> {
    constructor(props: DataEntryProps) {
        super(props);
        this.state = {
            isEditing: false, 
            idCounter: 0, 
            formValues: {
                
             }, 
            items: [
                
            ], 
            workItems: [
                
            ]
         };
    }
    static getDerivedStateFromProps(props: DataEntryProps, state: DataEntryState) {
        
        // log 'getDerivedStateFromProps.workItems', workItems
        if (props.items !== state.items) {
            let idCounter = 0;
            const workItems = props.items.map(item => 
            
                Object.assign({}, item, { _id: ++idCounter} )
            );
            return {
                    idCounter, 
                    isEditing: false, 
                    formValues: {
                        
                     }, 
                    items: props.items, 
                    workItems: workItems
                 };
        }
        return null;
    }
    
    // log 'handleFormChangeValue', name, value
    handleFormChangeValue = (name: string, value: any) => 
        this.setState((state) => 
        
            ({
                formValues: {
                    ...this.state.formValues, 
                    [name]: value
                 }
             })
        );
    handleFormConfirm = () => {
        const newItems = this.state.workItems.map((item) => {
        
            return item._id == this.state.formValues._id ? this.state.formValues : item;
        }
        );
        this.setState((state) => 
        
            ({
                isEditing: false, 
                workItems: newItems, 
                formValues: {
                    
                 }
             })
        )
    };
    handleFormCancel = () => 
        this.setState((state) => 
        
            ({
                isEditing: false, 
                formValues: {
                    
                 }
             })
        );
    
    // _ alert('Edit: ' + JSON.stringify(item))
    handleEditItem = (item: object) => 
        this.setState((state) => 
        
            ({
                isEditing: true, 
                formValues: item
             })
        );
    
    // _ alert('Remove: ' + JSON.stringify(item))
    handleRemoveItem = (item: object) => {
        const newItems = this.state.workItems;
        var removeIndex = newItems.map(a => a._id).indexOf(item._id);
        ~removeIndex && newItems.splice(removeIndex, 1)
        this.setState((state) => 
        
            ({
                workItems: newItems
             })
        )
    };
    handleAddItem = () => {
        let idCounter = this.state.idCounter;
        const newItem: any = {
            _id: ++idCounter
         };
        this.props.formDef.controls.map((control) => {
        
            if (control.type == 'boolean') {
                newItem[control.id] = false;
            }
            else {
                newItem[control.id] = '';
            }
        }
        )
        this.setState((state) => 
        
            ({
                idCounter: idCounter, 
                workItems: [
                    ...this.state.workItems, 
                    newItem
                ], 
                formValues: newItem, 
                isEditing: true
             })
        )
    };
    render() {
        return  (
            <StyledRoot
            >
                {
                    this.state.isEditing ?  (
                        <DataForm 
                            formDef={this.props.formDef}
                            values={this.state.formValues}
                            onChangeValue={this.handleFormChangeValue}
                            onConfirm={this.handleFormConfirm}
                            onCancel={this.handleFormCancel}
                         />
                        )
                     :  (
                        <div
                        >
                            <StyledAdd
                             onClick={this.handleAddItem}>
                                Add
                            </StyledAdd>
                            <DataList 
                                listDef={this.props.listDef}
                                items={this.state.workItems}
                                onEdit={this.handleEditItem}
                                onRemove={this.handleRemoveItem}
                             />
                        </div>
                        )
                    
                }
            </StyledRoot>
            )
        ;
    }
}
export default DataEntry;
