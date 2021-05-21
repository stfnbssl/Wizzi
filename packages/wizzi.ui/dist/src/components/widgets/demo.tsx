/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.ui\.wizzi\src\components\widgets\demo.tsx.ittf
    utc time: Tue, 18 May 2021 13:32:19 GMT
*/
import {theme} from '../SCTheme';
import {ThemeProvider} from 'styled-components';
import {Button} from './button';
import {Card} from './card';
import {Tick} from './tick';
import {Box} from './Box';
import {Text} from './Text';
import {DataList} from '../data/DataList';
import {DataForm} from '../data/DataForm';
import {DataEntry} from '../data/DataEntry';


const __listDef = {
    id: 'books', 
    title: 'Books', 
    columns: [
        {
            id: 'author'
         }, 
        {
            id: 'title'
         }, 
        {
            id: 'genre'
         }
    ]
 };

const __formDef = {
    id: 'books', 
    title: 'Books', 
    controls: [
        {
            id: 'author', 
            type: 'text', 
            required: true
         }, 
        {
            id: 'title', 
            type: 'text', 
            required: true
         }, 
        {
            id: 'genre', 
            type: 'select', 
            required: true, 
            options: [
                {
                    label: 'Noir', 
                    value: 'Noir'
                 }, 
                {
                    label: 'Novel', 
                    value: 'Novel'
                 }, 
                {
                    label: 'Tales', 
                    value: 'Tales'
                 }
            ]
         }, 
        {
            id: 'read', 
            type: 'checkbox'
         }, 
        {
            id: 'readEnded', 
            type: 'date'
         }
    ]
 };

const __items = [
    {
        author: 'Stefi', 
        title: 'Philos', 
        read: false, 
        genre: 'Noir', 
        readEnded: '30/11/2021'
     }, 
    {
        author: 'Annie', 
        title: 'Flower', 
        read: true, 
        genre: 'Tales', 
        readEnded: '31/12/2021'
     }
];

import React, {FunctionComponent} from 'react';

export interface WidgetsDemoProps {
    title: string;
}

export const WidgetsDemo: FunctionComponent<WidgetsDemoProps> = ({
    title
 }) => 

     (
    <aside
    >
        <h2
        >
            {title}
        </h2>
        <div
        >
            <ThemeProvider
             theme={theme}>
                <DataEntry
                 formDef={__formDef} listDef={__listDef} items={__items} />
            </ThemeProvider>
        </div>
    </aside>
    )

;
export default WidgetsDemo;
