/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\src\site\webpacks\shell\src\components\Editor\EditorProps.tsx.ittf
    utc time: Wed, 14 Apr 2021 15:53:09 GMT
*/
import  '../../types';
import {SnackFiles, SnackFile} from '../../features/packi/index';
import {Annotation} from '../../features/annotations/index';
export type EditorProps = { 
    files: SnackFiles;
    updateFiles: (updateFn: (files: SnackFiles) => { 
        [path: string]: SnackFile | null;
    }) => void;
    selectedFile: string;
    onSelectFile: (path: string) => void;
    annotations: Annotation[];
    lineNumbers?: 'on' | 'off' | 'relative' | 'interval';
    wordWrap?: 'off' | 'on' | 'wordWrapColumn' | 'bounded';
    scrollBeyondLastLine?: boolean;
    minimap?: { 
        enabled?: boolean;
        maxColumn?: number;
        renderCharacters?: boolean;
        showSlider?: 'always' | 'mouseover';
        side?: 'right' | 'left';
    };
    autoFocus?: boolean;
    fontFamily?: string;
    fontLigatures?: boolean;
};
