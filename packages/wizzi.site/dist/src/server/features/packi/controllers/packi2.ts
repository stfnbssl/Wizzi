/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\server\src\features\packi\controllers\packi2.ts.ittf
    utc time: Sat, 29 May 2021 11:12:38 GMT
*/
import {Router, Request, Response} from 'express';
import {ControllerType, AppInitializerType} from '../../../features/app/types';
import {sendHtml, sendSuccess, sendPromiseResult, sendFailure} from '../../../utils/sendResponse';
import {Packi2ModelType, GetPacki2Model} from '../mongo/packi2';

export class PackiController implements ControllerType {
    
    public path = '/api/v1/packi';
    
    public router = Router();
    
    public Packi2Model: Packi2ModelType;
    
    
    initialize = (initValues: AppInitializerType) => {
        console.log('Entering PackiController.initialize');
        this.Packi2Model = GetPacki2Model();
        ;
        this.router.get(`/`, this.get);
        this.router.post(`/`, this.addNewPacki2);
        this.router.get(`/:id`, this.getPacki2ById);
        this.router.put(`/:id`, this.updatePacki2);
        this.router.delete(`/:id`, this.deletePacki2);
    };
    
    private addNewPacki2 = async (request: Request, response: Response) => {
    
        let newPacki2 = new this.Packi2Model(request.body);
        newPacki2.save((err, packi2) => {
        
            if (err) {
                sendFailure(response, err, 501)
            }
            sendSuccess(response, {
                data: packi2
             })
        }
        )
    }
    ;
    
    private get = async (request: Request, response: Response) => 
    
        this.Packi2Model.find({}, (err, packi2) => {
        
            if (err) {
                sendFailure(response, err, 501)
            }
            sendSuccess(response, {
                data: packi2
             })
        }
        )
    
    ;
    
    private getPacki2ById = async (request: Request, response: Response) => 
    
        this.Packi2Model.findById(request.params.id, (err, packi2) => {
        
            if (err) {
                sendFailure(response, err, 501)
            }
            sendSuccess(response, {
                data: packi2
             })
        }
        )
    
    ;
    
    private updatePacki2 = async (request: Request, response: Response) => 
    
        this.Packi2Model.findOneAndUpdate({
            _id: request.params.id
         }, request.body, {
            new: true
         }, (err, packi2) => {
        
            if (err) {
                sendFailure(response, err, 501)
            }
            sendSuccess(response, {
                data: packi2
             })
        }
        )
    
    ;
    
    private deletePacki2 = async (request: Request, response: Response) => 
    
        this.Packi2Model.remove({
            _id: request.params.id
         }, (err) => {
        
            if (err) {
                sendFailure(response, err, 501)
            }
            sendSuccess(response, {
                message: 'Successfully deleted packi2!'
             })
        }
        )
    
    ;
}
