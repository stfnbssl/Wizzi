/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\site\pages\Document.tsx.ittf
    utc time: Mon, 03 May 2021 18:21:11 GMT
*/
import jsesc from 'jsesc';
import React from 'react';
import {getPageMetadata} from '../../../client/components/PageMetadata';
import {DEFAULT_DESCRIPTION} from '../../../client/configs/defaults';
import type {RouterData, QueryParams} from '../../../client/features/packi';
type Props = { 
    id: string | undefined;
    data: RouterData;
    queryParams: QueryParams;
    content: { 
        html: string;
        css: { 
            content: string;
            renderedClassNames: string[];
        };
    };
};
const css = String.raw;
export default function Document(props: Props) {
    
        const {
            id, 
            data, 
            content, 
            queryParams
         } = props;
        const {
            title, 
            meta
         } = getPageMetadata({
            id, 
            name: ((((data.type === 'success' ? data.packi?.manifest?.name : undefined)) ?? queryParams.name)) ?? data.defaults.name, 
            description: ((data.type === 'success' ? data.packi?.manifest?.description : undefined)) ?? DEFAULT_DESCRIPTION
         });
        return  (
            <html
            >
                <head
                >
                    <meta
                     charSet="utf-8" />
                    <meta
                     httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                     name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                    <title
                    >
                        {title}
                    </title>
                    {
                        meta.map((metaProps, index) => 
                        
                             (
                            <meta
                             key={index} {...metaProps} />
                            )
                        
                        )
                    }
                    <link
                     rel="shortcut icon" href="/favicon.ico" />
                    <link
                     rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,500,600" />
                    <link
                     rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css" />
                    <style
                     type="text/css" dangerouslySetInnerHTML={{
                            __html: css`
              :root {
                --font-normal: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                --font-monospace: 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New',
                  monospace;
              }

              html {
                box-sizing: border-box;
              }

              *,
              *:before,
              *:after {
                box-sizing: inherit;
              }

              *:focus {
                outline: none;
              }

              *:focus-visible {
                outline: auto;
              }

              html,
              body {
                height: 100%;
                width: 100%;
                overflow: hidden;
              }

              body {
                font-family: var(--font-normal);
                font-size: 14px;
                line-height: 1.42857143;
                overscroll-behavior: none;
              }

              div {
                scrollbar-width: thin;
                scrollbar-color: var(--color-disabled) var(--color-background);
              }

              @media (hover) {
                ::-webkit-scrollbar {
                  width: 12px;
                  height: 12px;
                  background: var(--color-background);
                }
                ::-webkit-scrollbar-thumb {
                  background: var(--color-disabled);
                  border-radius: 10px;
                  border: 3px var(--color-background) solid;
                }
              }

              button,
              input,
              select,
              textarea {
                font: inherit;
                color: inherit;
                line-height: inherit;
              }

              button {
                cursor: pointer;
              }

              button[disabled] {
                cursor: default;
              }

              #root {
                height: 100vh;
              }

              a {
                color: #4099ff;
              }
            `
                         }} />
                    <style
                     type="text/css" data-aphrodite dangerouslySetInnerHTML={{
                            __html: content.css.content
                         }} />
                    <script
                     dangerouslySetInnerHTML={{
                            __html: `
               if (window.location.search.indexOf('hideQueryParams=true') >= 0) {
                 history.replaceState(null, document.title, window.location.pathname);
               }
               window.__INITIAL_DATA__ = ${jsesc({
                                data, 
                                queryParams
                             }, {
                                quotes: 'double', 
                                isScriptContext: true
                             })} `
                         }} />
                </head>
                <body
                >
                    <div
                     id="root" dangerouslySetInnerHTML={{
                            __html: content.html
                         }} />
                    <script
                     src="/dist/main.bundle.js" />
                </body>
            </html>
            )
        ;
    }
