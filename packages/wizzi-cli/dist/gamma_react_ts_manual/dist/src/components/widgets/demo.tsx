/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\demo.tsx.ittf
    utc time: Wed, 10 Mar 2021 13:28:34 GMT
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
import React, {FunctionComponent} from 'react';

type WidgetsDemoProps = { 
    title: string;
} 
;
export const WidgetsDemo: FunctionComponent<WidgetsDemoProps> = ({
    title
}) =>  (
        <ThemeProvider theme={defaultTheme}>
            <aside>
                <h2>
                {title}</h2>
            
                <h4>
                widget: Card
                </h4>
            
                <div>
                    <Card title="Welcome!" paragraph="To this example of a Card widget">
                    </Card>
                
                </div>
            
                <h4>
                widget: Tick
                </h4>
            
                <div>
                    <Tick>
                    </Tick>
                
                </div>
            
                <h4>
                widget: Button
                </h4>
            
                <div>
                    <Button active={true} icon="https://material.io/resources/icons/static/ic_material_192px_light.svg" theme="dark" onClick={() =>
                        alert('Hello')}>
                    Give me five</Button>
                
                </div>
            
                <h5>
                widget: ThemeButton
                </h5>
            
                <div>
                    <ThemeButton>
                    Theme button</ThemeButton>
                
                    <ThemeButton variant={VARIANT.SECONDARY}>
                    Theme button</ThemeButton>
                
                </div>
            
                <h5>
                widget: Pulsar
                </h5>
            
                <div>
                    <Pulsar diameter={100}>
                    </Pulsar>
                
                </div>
            
                <h5>
                widget: Dash
                </h5>
            
                <div>
                    <Dash radius={50} color='yellow' trackColor='rgba(0,0,0,.2)' width={4} duration='1s'>
                    </Dash>
                
                </div>
            
                <h5>
                widget: Rotate
                </h5>
            
                <div>
                    <Rotate speed={100}>
                    &lt; 💅🏾 &gt;</Rotate>
                
                </div>
            
                <h5>
                widget: InputRef
                </h5>
            
                <div>
                    <InputRef>
                    </InputRef>
                
                </div>
            
            </aside>
        
        </ThemeProvider>
    )
;
