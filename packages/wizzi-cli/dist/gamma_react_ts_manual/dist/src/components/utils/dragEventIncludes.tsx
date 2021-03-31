/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\utils\dragEventIncludes.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
export default function dragEventIncludes({
        dataTransfer
     }: DragEvent, item: string):  boolean {
        if (!dataTransfer) {
            return false;
        }
        if (dataTransfer.types instanceof DOMStringList) {
            // dataTransfer.types is a DOMStringList on IE/Edge and not an Array as MDN will lead you to believe
            // DOMStringList doesn't have a `includes` method on those browsers
            // So we need to use `contains` to check for the presence of the string
            return dataTransfer.types.contains(item);
        }
        return dataTransfer.types.indexOf(item) > -1;
    }
