/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\data\DataList.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import Box from '../widgets/Box';
import {ListDef} from './types';
import ListHead from './ListHead';
import ListRow from './ListRow';

export interface DataListProps {
    listDef: ListDef;
    items: object[];
    onEdit: (item: object) => void;
    onRemove: (item: object) => void;
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
const StyledList = styled.table`
    
`
export const DataList: FunctionComponent<DataListProps> = ({
    listDef, 
    items, 
    onEdit, 
    onRemove
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
                { listDef.title }
            </StyledTitle>
            <StyledList
             id={ listDef.id }>
                <ListHead
                 columns={listDef.columns} />
                <tbody
                >
                    {
                        items.map((item, ndx) => 
                        
                             (
                            <ListRow 
                                key={ndx}
                                columns={listDef.columns}
                                item={item}
                                onEdit={() => 
                                    
                                        onEdit(item)
                                }
                                onRemove={() => 
                                    
                                        onRemove(item)
                                }
                                onSelect={
                                    // _ alert('Select: ' + JSON.stringify(item))
                                    () => {
                                    
                                    }
                                }
                             />
                            )
                        
                        )
                    }
                </tbody>
            </StyledList>
        </StyledRoot>
    </Box>
    )

;
export default DataList;
