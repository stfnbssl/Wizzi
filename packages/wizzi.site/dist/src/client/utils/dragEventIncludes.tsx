/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\utils\dragEventIncludes.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:27 GMT
*/
export default function dragEventIncludes({
        dataTransfer
     }: DragEvent, item: string):  boolean {
    
        if (!dataTransfer) {
            return false;
        }
        if (dataTransfer.types instanceof DOMStringList) {
            return dataTransfer.types.contains(item);
        }
        return dataTransfer.types.indexOf(item) > -1;
    }
