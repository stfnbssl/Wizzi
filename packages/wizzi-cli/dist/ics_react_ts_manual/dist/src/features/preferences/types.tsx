/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\ics_react_ts_manual\.wizzi\src\features\preferences\types.tsx.ittf
    utc time: Fri, 26 Mar 2021 07:40:26 GMT
*/
export type PreferencesType = { 
    connectGithubRepos: boolean;
    autoGenSingleDoc: boolean;
    autoExecJob: boolean;
    loggedUid: string;
    trustLocalStorage: boolean;
    fileTreeShown: boolean;
    panelsShown: boolean;
    panelType: 'errors' | 'logs';
    theme: ThemeName;
};
export type SetPreferencesType = (overrides: Partial<PreferencesType>) => void;
export type PreferencesContextType = { 
    setPreferences: SetPreferencesType;
    preferences: PreferencesType;
};
export type ThemeName = 'light' | 'dark';