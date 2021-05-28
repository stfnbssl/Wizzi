/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\packi\controllers\productions.ts.ittf
    utc time: Fri, 28 May 2021 20:54:57 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import fs from 'fs';
import {fsTypes} from '../../filesystem';
import {wizziTypes, wizziProds, WizziFactory} from '../../wizzi';
import {PackiFiles, TemplateList, Template} from '../types';
import {file} from 'wizzi';

export class ProductionsController implements ControllerType {
    
    public path = '/api/v1/productions';
    
    public router = Router();
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering ProductionsController.initialize');
        this.router.post(`/mtreedebuginfo/:id`, this.mTreeDebugInfo)
        this.router.post(`/artifact/:id`, this.generateArtifact)
        this.router.post(`/job`, this.executeJob)
        this.router.post(`/wizzify`, this.wizzify)
    };
    
    private mTreeDebugInfo = async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const files: PackiFiles = request.body;
        console.log('mTreeDebugInfo.received files', Object.keys(files));
        wizziProds.mTreeDebugInfo(id, files, {}).then((value) => {
        
            console.log('debugInfo.result', value);
            sendSuccess(response, {
                mTreeBuildUpScript: value
             })
        }
        ).catch((err) => {
        
            console.log('features.packi.controllers.production.mTreeDebugInfo.err', err);
            sendFailure(response, err, 501);
        }
        )
    }
    ;
    
    private generateArtifact = async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const files: PackiFiles = request.body;
        console.log('generateArtifact.received files', Object.keys(files));
        wizziProds.generateArtifact(id, files).then((value) => {
        
            console.log('generateArtifact.result', value);
            sendSuccess(response, {
                generatedArtifact: value
             })
        }
        ).catch((err) => {
        
            console.log('features.packi.controllers.production.generateArtifact.err', err);
            sendFailure(response, err, 501);
        }
        )
    }
    ;
    
    private executeJob = async (request: Request, response: Response) => {
    
        const files: PackiFiles = request.body;
        console.log('ProductionsController.executeJob.received files', Object.keys(files));
        wizziProds.executeJobs(files).then(async (fsJson) => {
        
            const files = await WizziFactory.extractGeneratedFiles(fsJson);
            console.log('features.packi.controllers.production.executeJob.generatedArtifacts', Object.keys(files));
            sendSuccess(response, {
                generatedArtifacts: files
             })
        }
        ).catch((err) => {
        
            console.log('features.packi.controllers.production.executeJob.err', err);
            sendFailure(response, err, 501);
        }
        )
    }
    ;
    
    private wizzify = async (request: Request, response: Response) => {
    
        const id = request.params.id;
        const files: PackiFiles = request.body;
        console.log('wizzify.received files', Object.keys(files));
        wizziProds.wizzify(files).then(async (ittfResult: PackiFiles) => {
        
            console.log('features.packi.controllers.production.wizzify.ittfResult', ittfResult);
            sendSuccess(response, {
                packiResult: ittfResult
             })
        }
        ).catch((err) => {
        
            console.log('features.packi.controllers.production.wizzify.err', err);
            sendFailure(response, err, 501);
        }
        )
    }
    ;
}
