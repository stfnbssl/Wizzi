/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\services\TimedService.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/

export class TimedService {
    constructor(payload: any, frequence: number, action: (payload: any) => void) {
        this.payload = payload;
        this.frequence = frequence;
        this.action = action;
        this.timer = setTimeout(() => 
        
            this.action(this.payload)
        , this.frequence)
        ;
    }
    timer: NodeJS.Timeout;
    frequence: number;
    payload: any;
    action: (payload: any) => void;
    setPayload(payload: any, reset: boolean = true) {
        this.payload = payload;
        if (reset) {
            clearInterval(this.timer);
            this.timer = setTimeout(() => 
            
                this.action(this.payload)
            , this.frequence)
            ;
        }
    }
    setFrequence(frequence: number, reset: boolean = true) {
        this.frequence = frequence;
        if (reset || frequence == 0) {
            clearInterval(this.timer);
            if (frequence > 0) {
                this.timer = setTimeout(() => 
                
                    this.action(this.payload)
                , this.frequence)
                ;
            }
        }
    }
}
