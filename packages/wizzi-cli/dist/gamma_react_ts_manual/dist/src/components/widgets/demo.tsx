/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\demo.tsx.ittf
    utc time: Sun, 21 Mar 2021 14:14:13 GMT
*/
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from '../../theme/styled';
import {Button} from './button';
import {ThemeButton, VARIANT} from './themebutton';
import {Pulsar} from './pulsar';
import {Rotate} from './rotate';
import {InputRef} from './inputref';
import {Dash} from './dash';
import {Card} from './card';
import {Tick} from './tick';
import {ToggleSwitch} from './toggleSwitch';
import {LargeInput} from './largeInput';
import {EditableField} from './editableField';
import React, {FunctionComponent} from 'react';
// see https://mxstbr.blog/2016/11/styled-components-magic-explained/
import styled, {keyframes} from 'styled-components';

type WidgetsDemoProps = { 
    title: string;
};

const DemoItem = styled.div`
    margin: 50px 50px 50px 0;
    border-bottom: 1px solid #dedede;
    
`
export const WidgetsDemo: FunctionComponent<WidgetsDemoProps> = ({
    title
}) =>  (
        <ThemeProvider theme={defaultTheme}>
            <aside>
                <h2 />
                <h4 />
                <div>
                    <Card title="Welcome!" paragraph="To this example of a Card widget" />
                </div>
                <h4 />
                <div>
                    <Tick />
                </div>
                <h4 />
                <div>
                    <Button active={true} icon="https://material.io/resources/icons/static/ic_material_192px_light.svg" theme="dark" onClick={() => alert('Hello')} />
                </div>
                <DemoItem>
                ThemeButton<div>
                        <ThemeButton />
                        <ThemeButton variant={VARIANT.SECONDARY} />
                    </div>
                </DemoItem>
                <DemoItem>
                Dash<div>
                        <Dash radius={50} color='yellow' trackColor='rgba(0,0,0,.2)' width={4} duration='1s' />
                    </div>
                </DemoItem>
                <DemoItem>
                Rotate<div>
                        <Rotate speed={100} />
                    </div>
                </DemoItem>
                <DemoItem>
                InputRef<div>
                        <InputRef />
                    </div>
                </DemoItem>
                <DemoItem>
                ToggleSwitch<div>
                        <ToggleSwitch checked={true} label="yes or no" dark={false} onChange={() => alert('ooh! ooh!')} />
                    </div>
                </DemoItem>
                <DemoItem>
                LargeInput<div>
                        <LargeInput value="Hello world" dark={false} onChange={() => alert('aah! aah!')} />
                    </div>
                </DemoItem>
                <DemoItem>
                EditableField<div>
                        <EditableField value="Hello world" dark={false} />
                    </div>
                </DemoItem>
                <DemoItem>
                Pulsar<div>
                        <Pulsar diameter={100} />
                    </div>
                </DemoItem>
            </aside>
        </ThemeProvider>
    )
;
