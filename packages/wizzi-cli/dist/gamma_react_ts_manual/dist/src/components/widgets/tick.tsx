/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\gamma_react_ts_manual\.wizzi\src\components\widgets\tick.tsx.ittf
    utc time: Thu, 11 Mar 2021 20:36:35 GMT
*/
import React, {Component} from 'react';

type TickState = { 
    time: Date;
} 
;


export class Tick extends Component<{}, TickState> {
    
    tick() {
        this.setState({
            time: new Date()
        })
    }
    
    componentWillMount() {
        this.tick();
    }
    
    componentDidMount() {
        setInterval(() =>
            this.tick(), 1000)
    }
    
    render() {
        return  (
                <p>
                The current time is{
                    this.state.time.toLocaleTimeString()
                }</p>
            )
        ;
    }
}