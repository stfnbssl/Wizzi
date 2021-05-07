/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\features\auth\withAuth.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:12 GMT
*/
import isEqual from 'lodash/isEqual';
import nullthrows from 'nullthrows';
import * as React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {$Subtract} from '../../types';
import {Viewer} from '../account/index';
import {AuthProps} from './types';
import AuthManager from './authManager';

const Auth = new AuthManager();

const enhanceWithAuthMethods = (Comp: React.ComponentType<AuthProps>) => {

    return class WithAuthWrapper extends React.Component<AuthProps> {
            componentDidMount() {
                this.updateViewer();
            }
            private async updateViewer() {
                const {
                    accessToken, 
                    sessionSecret
                 } = Auth;
                if (accessToken || sessionSecret) {
                    const viewer = await Auth.getProfile();
                    const prevViewer = this.props.viewer;
                    this.props.dispatch({
                        type: 'UPDATE_VIEWER', 
                        viewer
                     })
                }
                else {
                    this.props.dispatch({
                        type: 'UPDATE_VIEWER', 
                        viewer: null
                     })
                }
            }
            
            // TODO(tc): replace this once we talk to graphql elsewhere
            _handleGetSessionSecret = () => {
                return Auth.sessionSecret;
            };
            
            // TODO(tc): replace this once we talk to graphql elsewhere
            _handleSetMetadata = async (newMetadata: { 
                appetizeCode: string;
            }) => {
            
                const {
                    accessToken, 
                    sessionSecret
                 } = Auth;
                if (!accessToken && !sessionSecret) {
                    return ;
                }
                const endpoint = `${nullthrows(process.env.API_SERVER_URL)}/--/graphql`;
                try {
                    const response = await fetch(`${endpoint}`, {
                            method: 'POST', 
                            headers: {
                                Accept: 'application/json', 
                                'Content-Type': 'application/json', 
                                ...((accessToken ? {
                                            Authorization: `Bearer ${accessToken}`
                                         } : {}))
                                , 
                                ...((sessionSecret ? {
                                            'Expo-Session': sessionSecret
                                         } : {}))
                                
                             }, 
                            body: JSON.stringify({
                                query: `mutation ($newMetadata: UserDataInput!) {
                      me {
                        updateProfile(userData: $newMetadata) {
                          id
                        }
                      }
                    }`, 
                                variables: {
                                    newMetadata
                                 }
                             })
                         });
                    const json = await response.json();
                    if (!json.errors) {
                        this.updateViewer();
                    }
                } 
                catch (e) {
                } 
            }
            ;
            render() {
                return  (
                    <Comp
                    
                    // @ts-ignore
                     getSessionSecret={this._handleGetSessionSecret}
                    // @ts-ignore
                     setMetadata={this._handleSetMetadata}
                    // @ts-ignore
                     {...this.props} />
                    )
                ;
            }
        }
    ;
}
;
export default function withAuth<P extends AuthProps>(Comp: React.ComponentType<P>):  React.ComponentType<$Subtract<P, AuthProps>> {
    
        return compose(connect((state: {  viewer: Viewer | null; }) => { 
                    return {
                            viewer: state.viewer
                         };
                }
                ), enhanceWithAuthMethods)(Comp) as any;
        
    }
