/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\features\filelist\types.tsx.ittf
    utc time: Sat, 20 Mar 2021 13:20:50 GMT
*/
export type TextFileEntry = Readonly<{ 
    item: { 
        path: string;
        type: 'file';
        content: string;
        generated?: boolean;
        bothRealAndGenerated?: boolean;
        virtual?: true;
        asset?: false;
    } 
    ;
    state: { 
        isOpen?: boolean;
        isFocused?: boolean;
        isSelected?: boolean;
        isCreating?: boolean;
        isExpanded?: false;
    } 
    ;
} 
>;
export type AssetFileEntry = Readonly<{ 
    item: { 
        path: string;
        type: 'file';
        uri: string;
        generated?: false;
        asset: true;
        virtual?: true;
    } 
    ;
    state: { 
        isOpen?: boolean;
        isFocused?: boolean;
        isSelected?: boolean;
        isCreating?: boolean;
        isExpanded?: false;
    } 
    ;
} 
>;
export type FolderEntry = Readonly<{ 
    item: { 
        path: string;
        type: 'folder';
        asset?: false;
        virtual?: false;
        generated?: false;
    } 
    ;
    state: { 
        isOpen?: boolean;
        isFocused?: boolean;
        isExpanded?: boolean;
        isSelected?: boolean;
        isCreating?: boolean;
    } 
    ;
} 
>;
export type FileSystemEntry = TextFileEntry | AssetFileEntry | FolderEntry;
export type FileSystemEntryDiff = { 
    kind: string;
    a?: FileSystemEntry['item'];
    b?: FileSystemEntry['item'];
} 
;
