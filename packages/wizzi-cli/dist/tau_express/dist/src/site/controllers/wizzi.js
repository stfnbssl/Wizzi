/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\tau_express\.wizzi\src\site\controllers\wizzi.js.ittf
    utc time: Thu, 04 Mar 2021 19:31:00 GMT
*/
'use strict';
import { Router } from 'express';
export class WizziController {
    path = '/wizzi';
    router = Router();
    initialize(initValues) {
        this.router.get(`/`, this.index);
    }
    index(request, response, next) {
        response.render('wizzi/index.html.ittf', {
            title: 'Wizzi section'
        })
    }
}
