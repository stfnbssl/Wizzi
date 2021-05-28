/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\features\post\reducer.ts.ittf
    utc time: Tue, 25 May 2021 15:10:46 GMT
*/
import {combineReducers} from 'redux';
import {ActionType, getType} from 'typesafe-actions';
import {IPost} from './types';
import * as postActions from './actions';

export type PostState = Readonly<{ 
    items: IPost[];
    item: IPost | null;
}>;
const initialState: PostState = {
    items: [], 
    item: null
 };

export type PostAction = ActionType<typeof postActions>;

export default combineReducers<PostState, PostAction>({
        items: (state = initialState.items, action) => {
        
            console.log('Post.items.action', action);
            switch (action.type) {
                case getType(postActions.getPostListSuccess): {
                    return action.payload.posts;
                }
                case getType(postActions.createPostSuccess): {
                    return [
                            ...state, 
                            action.payload.post
                        ];
                }
                case getType(postActions.updatePostSuccess): {
                    return state.map((item) => 
                        
                            (item._id === action.payload.post._id ? {
                                    ...item, 
                                    ...action.payload.post
                                 } : item)
                        );
                }
                case getType(postActions.deletePostSuccess): {
                    return state.filter((item) => 
                        
                            (item._id !== action.payload.post._id)
                        );
                }
                default: {
                    return state;
                }
            }
        }
        , 
        item: (state = initialState.item, action) => {
        
            console.log('Post.item.action', action);
            switch (action.type) {
                case getType(postActions.getPostByIdSuccess): {
                    return action.payload.post;
                }
                default: {
                    return state;
                }
            }
        }
        
     })
