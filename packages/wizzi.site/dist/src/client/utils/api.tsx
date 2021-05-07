/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\utils\api.tsx.ittf
    utc time: Fri, 07 May 2021 18:42:12 GMT
*/
export async function callApi(method: string, url: string, path: string, data?: any) {

    console.log('callApi', method, url, path, data);
    console.log('url', `${url}/${path}`)
    const res = await fetch(`${url}/${path}`, {
            method, 
            headers: {
                Accept: 'application/json', 
                'Content-Type': 'application/json'
             }, 
            body: JSON.stringify(data)
         });
    return await res.json();
}
