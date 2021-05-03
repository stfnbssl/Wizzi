/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\features\preferences\usePreferences.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:20 GMT
*/
import {useContext} from 'react';
import {PreferencesType, SetPreferencesType, PreferencesContextType, PreferencesContext} from './types';

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
