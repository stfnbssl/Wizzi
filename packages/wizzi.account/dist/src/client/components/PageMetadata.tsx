/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\client\src\components\PageMetadata.tsx.ittf
    utc time: Fri, 21 May 2021 20:28:10 GMT
*/
import * as React from 'react';
import {Helmet} from 'react-helmet-async';
import config from '../features/config';
type Props = { 
    name: string;
    description: string;
    id?: string;
};
export function getPageMetadata(props: Props) {

    const title = props.id ? `${props.name} - wizzi.account` : config.DEFAULT_METADATA_NAME;
    const description = props.description === config.DEFAULT_DESCRIPTION ? props.id ? config.DEFAULT_METADATA_DESCRIPTION_SAVED : config.DEFAULT_METADATA_DESCRIPTION_EMPTY : props.description;
    const url = `${config.SERVER_URL}${
    props.id
     ? `/${props.id}`
     : ''}
    `;
    const image = '';
    const meta = [
        {
            name: 'description', 
            content: description
         }, 
        
        // Open graph
        {
            property: 'og:url', 
            content: url
         }, 
        {
            property: 'og:title', 
            content: title
         }, 
        {
            property: 'og:description', 
            content: description
         }, 
        {
            property: 'og:type', 
            content: 'website'
         }, 
        {
            property: 'og:image', 
            content: image
         }, 
        {
            property: 'og:image:width', 
            content: '200'
         }, 
        {
            property: 'og:image:height', 
            content: '200'
         }
    ];
    return {
            title, 
            description, 
            url, 
            meta
         };
}

export default function PageMetadata(props: Props) {
    
        const {
            title, 
            meta
         } = getPageMetadata(props);
        return  (
            <Helmet
             title={title} meta={meta} />
            )
        ;
    }
