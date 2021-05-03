/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\components\EditorView\PageMetadata.tsx.ittf
    utc time: Mon, 03 May 2021 09:48:27 GMT
*/
import * as React from 'react';
import {Helmet} from 'react-helmet-async';
import {DEFAULT_DESCRIPTION, DEFAULT_METADATA_NAME, DEFAULT_METADATA_DESCRIPTION_EMPTY, DEFAULT_METADATA_DESCRIPTION_SAVED} from '../../configs/defaults';
import {isIntentionallyNamed} from '../../features/packi/index';
type Props = { 
    name: string;
    description: string;
    id?: string;
};
export function getPageMetadata(props: Props) {

    const title = props.id || isIntentionallyNamed(props.name) ? `${props.name} - Snack` : DEFAULT_METADATA_NAME;
    const description = props.description === DEFAULT_DESCRIPTION ? props.id ? DEFAULT_METADATA_DESCRIPTION_SAVED : DEFAULT_METADATA_DESCRIPTION_EMPTY : props.description;
    const url = `${process.env.SNACK_SERVER_URL}${
    props.id
     ? `/${props.id}`
     : ''}
    `;
    const image = 'https://s3.amazonaws.com/exp-brand-assets/SnackIcon_200.png';
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
         }, 
        
        // Twitter
        {
            name: 'twitter:card', 
            content: 'summary'
         }, 
        {
            name: 'twitter:site', 
            content: '@expo'
         }, 
        {
            name: 'twitter:title', 
            content: title
         }, 
        {
            name: 'twitter:description', 
            content: description
         }, 
        {
            name: 'twitter:image', 
            content: image
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
