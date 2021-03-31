/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\preferences\usePreferences.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import {useContext} from 'react';
import {PreferencesContext} from './PreferencesProvider';
import {PreferencesContextType, PreferencesType, SetPreferencesType} from './types';
export default function usePreferences():  [PreferencesType , SetPreferencesType] {
        const {
            preferences, 
            setPreferences
         } = useContext(PreferencesContext) as PreferencesContextType
        ;
        return [
                preferences, 
                setPreferences
            ];
    }
