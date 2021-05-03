/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\features\preferences\types.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:27 GMT
*/
import React from 'react';
export type ThemeName = 'light' | 'dark';

export type PanelType = 'errors' | 'logs';

export type PreferencesType = { 
    devicePreviewShown: boolean;
    fileTreeShown: boolean;
    panelsShown: boolean;
    panelType: PanelType;
    theme: ThemeName;
};

export type SetPreferencesType = (overrides: Partial<PreferencesType>) => void;

export type PreferencesContextType = { 
    setPreferences: SetPreferencesType;
    preferences: PreferencesType;
};
    // react-redux doesn't work with forwardRef: https://github.com/reduxjs/react-redux/issues/914
    // so this HOC always needs wrap a connect call, and a connect call cannot wrap this
    

export const PreferencesContext = React.createContext<PreferencesContextType | null>(null);
