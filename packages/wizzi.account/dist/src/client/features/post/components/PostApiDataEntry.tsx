/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\features\post\components\PostApiDataEntry.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import React, {FunctionComponent} from 'react';
import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes, css} from 'styled-components';

import {theme} from '../../../components/SCTheme';
import {ThemeProvider} from 'styled-components';
import {DataEntry, FormDef, ListDef} from '../../../../../../../wizzi.ui/dist/index';
import {RootState, RootAction} from '../../../store/types';
import * as postActions from '../actions';
import {IPost} from '../types';
const mapStateToProps = (state: RootState) => 

    ({
        items: state.post.items, 
        item: state.post.item
     })
;
const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => 

    ({
        onGetList: () => 
        
            dispatch(postActions.getPostListRequest())
        , 
        onCreate: (post: IPost) => 
        
            dispatch(postActions.createPostRequest(post))
        
     })
;

export type PostApiDataEntryProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & { 
};

export const PostApiDataEntry: FunctionComponent<PostApiDataEntryProps> = () => {

    return  (
        <div
        >
            <ThemeProvider
             theme={theme}>
                <DataEntry
                 formDef={ postFormDef } listDef={ postListDef } items={ postListData.items } />
            </ThemeProvider>
        </div>
        )
    ;
}
;
export const PostApiDataEntryConnected = connect(mapStateToProps, mapDispatchToProps)(PostApiDataEntry)
;
export default PostApiDataEntryConnected;
const postListDef: ListDef = {
    id: "postList", 
    title: "Blog posts", 
    hasSearch: true, 
    columns: [
        {
            id: "_id", 
            label: "_id", 
            type: "oid", 
            isKey: true
         }, 
        {
            id: "author", 
            label: "author", 
            type: "string"
         }, 
        {
            id: "title", 
            label: "title", 
            type: "string"
         }
    ]
 };
const postListData = {
    items: [
        {
            _id: "id 101", 
            author: "Stefi 101", 
            title: "My postulates 101"
         }, 
        {
            _id: "id 102", 
            author: "Stefi 102", 
            title: "My postulates 102"
         }, 
        {
            _id: "id 0", 
            author: "Stefi 0", 
            title: "My postulates 0"
         }, 
        {
            _id: "id 1", 
            author: "Stefi 1", 
            title: "My postulates 1"
         }, 
        {
            _id: "id 2", 
            author: "Stefi 2", 
            title: "My postulates 2"
         }, 
        {
            _id: "id 3", 
            author: "Stefi 3", 
            title: "My postulates 3"
         }, 
        {
            _id: "id 4", 
            author: "Stefi 4", 
            title: "My postulates 4"
         }, 
        {
            _id: "id 5", 
            author: "Stefi 5", 
            title: "My postulates 5"
         }, 
        {
            _id: "id 6", 
            author: "Stefi 6", 
            title: "My postulates 6"
         }, 
        {
            _id: "id 7", 
            author: "Stefi 7", 
            title: "My postulates 7"
         }
    ]
 };
const postFormDef: FormDef = {
    id: "postForm", 
    title: "Blog post", 
    controls: [
        {
            id: "_id", 
            label: "_id", 
            type: "oid", 
            isKey: true
         }, 
        {
            id: "author", 
            label: "author", 
            type: "string"
         }, 
        {
            id: "title", 
            label: "title", 
            type: "string"
         }, 
        {
            id: "content", 
            label: "content", 
            type: "string"
         }
    ]
 };
