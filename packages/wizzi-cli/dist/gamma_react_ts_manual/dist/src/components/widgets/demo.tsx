/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\demo.tsx.ittf
    utc time: Fri, 19 Mar 2021 20:08:21 GMT
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
} 
;

const DemoItem = styled.div`
    margin: 50px 50px 50px 0;
    border-bottom: 1px solid #dedede;
    
`
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
                    <Button active={true} icon="https://material.io/resources/icons/static/ic_material_192px_light.svg" theme="dark" onClick={() => alert('Hello')}>
                    Give me five</Button>
                
                </div>
            
                <DemoItem>
                ThemeButton<div>
                        <ThemeButton>
                        Theme button</ThemeButton>
                    
                        <ThemeButton variant={VARIANT.SECONDARY}>
                        Theme button</ThemeButton>
                    
                    </div>
                
                </DemoItem>
            
                <DemoItem>
                Dash<div>
                        <Dash radius={50} color='yellow' trackColor='rgba(0,0,0,.2)' width={4} duration='1s'>
                        </Dash>
                    
                    </div>
                
                </DemoItem>
            
                <DemoItem>
                Rotate<div>
                        <Rotate speed={100}>
                        &lt; 💅🏾 &gt;</Rotate>
                    
                    </div>
                
                </DemoItem>
            
                <DemoItem>
                InputRef<div>
                        <InputRef>
                        </InputRef>
                    
                    </div>
                
                </DemoItem>
            
                <DemoItem>
                ToggleSwitch<div>
                        <ToggleSwitch checked={true} label="yes or no" dark={false} onChange={() => alert('ooh! ooh!')}>
                        </ToggleSwitch>
                    
                    </div>
                
                </DemoItem>
            
                <DemoItem>
                LargeInput<div>
                        <LargeInput value="Hello world" dark={false} onChange={() => alert('aah! aah!')}>
                        </LargeInput>
                    
                    </div>
                
                </DemoItem>
            
                <DemoItem>
                EditableField<div>
                        <EditableField value="Hello world" dark={false}>
                        </EditableField>
                    
                    </div>
                
                </DemoItem>
            
                <DemoItem>
                Pulsar<div>
                        <Pulsar diameter={100}>
                        </Pulsar>
                    
                    </div>
                
                </DemoItem>
            
            </aside>
        
        </ThemeProvider>
    )
;
