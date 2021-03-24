/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\preferences\types.tsx.ittf
    utc time: Wed, 24 Mar 2021 16:19:16 GMT
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
