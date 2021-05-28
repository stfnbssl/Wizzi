/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\data\DataEntry.tsx.ittf
    utc time: Tue, 25 May 2021 15:10:47 GMT
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';
import {FormDef, ListDef} from './types';
import DataForm from './DataForm';
import DataList from './DataList';

export interface DataEntryProps {
    formDef: FormDef;
    listDef: ListDef;
    items: object[];
    onCreate: (item: any) => void;
    onUpdate: (id: string, item: any) => void;
    onDelete: (id: string) => void;
}

type DataEntryState = { 
    isEditing: boolean;
    isUpdating: boolean;
    items: object[];
    workItems: object[];
    formValues: object;
};

const styles = StyleSheet.create({
    root: {
        border: "1px solid #ff0000", 
        padding: "20px"
     }, 
    add: {
        color: "green"
     }
 });

export class DataEntry extends Component<DataEntryProps, DataEntryState> {
    constructor(props: DataEntryProps) {
        super(props);
        this.state = {
            isEditing: false, 
            isUpdating: false, 
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
            const workItems = props.items.map(item => 
            
                Object.assign({}, item )
            );
            return {
                    isEditing: false, 
                    isUpdating: false, 
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
        if (this.state.isUpdating) {
            this.props.onUpdate(this.state.formValues._id, this.state.formValues)
        }
        else {
            delete this.state.formValues._id
            this.props.onCreate(this.state.formValues)
        }
        this.setState((state) => 
        
            ({
                isEditing: false, 
                isUpdating: false, 
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
                isUpdating: false, 
                formValues: {
                    
                 }
             })
        );
    
    // _ alert('Edit: ' + JSON.stringify(item))
    handleEditItem = (item: object) => 
        this.setState((state) => 
        
            ({
                isEditing: true, 
                isUpdating: true, 
                formValues: item
             })
        );
    
    // _ alert('Remove: ' + JSON.stringify(item))
    handleRemoveItem = (item: object) => {
        this.props.onDelete(item._id)
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
        const newItem: any = {};
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
            <div
             className={css(styles.root)}>
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
                            <button
                             className={css(styles.add)} onClick={this.handleAddItem}>
                                Add
                            </button>
                            <DataList 
                                listDef={this.props.listDef}
                                items={this.state.workItems}
                                onEdit={this.handleEditItem}
                                onRemove={this.handleRemoveItem}
                             />
                        </div>
                        )
                    
                }
            </div>
            )
        ;
    }
}
export default DataEntry;
