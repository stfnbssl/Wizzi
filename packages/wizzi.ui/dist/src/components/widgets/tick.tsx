/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.ui\.wizzi\src\components\widgets\tick.tsx.ittf
    utc time: Tue, 18 May 2021 13:32:19 GMT
*/
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


export class Tick extends Component<{}, {}> {
    
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
        
            this.tick()
        , 1000)
    }
    
    render() {
        return  (
            <p
            >
                The current time is
                {
                    this.state.time.toLocaleTimeString()
                }
            </p>
            )
        ;
    }
}
export default Tick;
