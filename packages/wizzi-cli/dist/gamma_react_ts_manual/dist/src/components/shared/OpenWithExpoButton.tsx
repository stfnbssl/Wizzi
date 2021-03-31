/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\shared\OpenWithExpoButton.tsx.ittf
    utc time: Thu, 25 Mar 2021 16:39:06 GMT
*/
import * as React from 'react';
import {StyleSheet, css} from 'aphrodite';
import ButtonLink from './ButtonLink';
import constructExperienceURL from '../../utils/constructExperienceURL';
import {SDKVersion} from '../../configs/sdk';
type Props = { 
    sdkVersion: SDKVersion;
    channel: string;
    snackId: string | undefined;
};
const OpenWithExpoButton = ({
    sdkVersion, 
    channel, 
    snackId
 }: Props) => {
    const experienceURL = constructExperienceURL({
        sdkVersion, 
        channel, 
        snackId
     });
    return  (
        <ButtonLink variant="primary"
            target="_blank"
            href={experienceURL}
            className={css(styles.button)}
        >
            Open with Expo
        </ButtonLink>
        )
    ;
}
;
export default OpenWithExpoButton;
const styles = StyleSheet.create({
    button: {
        display: 'block'
     }
 });
