/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.frontend\.wizzi\src\components\FileList\types.tsx.ittf
    utc time: Sat, 01 May 2021 05:18:20 GMT
*/
export type TextFileEntry = Readonly<{ 
    item: { 
        path: string;
        type: 'file';
        content: string;
        virtual?: true;
        asset?: false;
    };
    state: { 
        isOpen?: boolean;
        isFocused?: boolean;
        isSelected?: boolean;
        isCreating?: boolean;
        isExpanded?: false;
        isError?: boolean;
        isLoading?: boolean;
    };
}>;
export type AssetFileEntry = Readonly<{ 
    item: { 
        path: string;
        type: 'file';
        uri: string;
        asset: true;
        virtual?: true;
    };
    state: { 
        isOpen?: boolean;
        isFocused?: boolean;
        isSelected?: boolean;
        isCreating?: boolean;
        isExpanded?: false;
        isError?: boolean;
        isLoading?: boolean;
    };
}>;
export type FolderEntry = Readonly<{ 
    item: { 
        path: string;
        type: 'folder';
        asset?: false;
        virtual?: false;
    };
    state: { 
        isOpen?: boolean;
        isFocused?: boolean;
        isExpanded?: boolean;
        isSelected?: boolean;
        isCreating?: boolean;
        isError?: boolean;
        isLoading?: boolean;
    };
}>;
export type FileSystemEntry = TextFileEntry | AssetFileEntry | FolderEntry;
