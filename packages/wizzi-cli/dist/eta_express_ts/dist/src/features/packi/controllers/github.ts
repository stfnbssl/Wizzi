/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-cli\dist\eta_express_ts\.wizzi\src\features\packi\controllers\github.ts.ittf
    utc time: Thu, 01 Apr 2021 15:10:45 GMT
*/
import {Router, Request, Response} from 'express';
import * as bodyParser from 'body-parser';
import {ControllerType, AppInitializerType} from '../../app/types';
import {githubTypes, githubApiCalls, githubUtils} from '../../github';
import {authManager} from '../../auth';
import {PackiFiles, TemplateList, Template} from '../types';
import {sendPromiseResult, sendSuccess, sendFailure} from '../../../utils/response';
import {TokenError} from 'passport-oauth2';
var jsonParser = bodyParser.json();
export class GithubController implements ControllerType {
    public path = '/api/v1/github';
    public router = Router();
    initialize = (initValues: AppInitializerType) => {
        this.router.get(`${this.path}/ownedrepos/:uid`, this.getOwnedRepositories)
        this.router.get(`${this.path}/clone/:uid/:owner/:name/:branch/:kind`, this.cloneRepository)
        this.router.post(`${this.path}/commit/:uid/:owner/:name/:branch`, this.commitRepository)
    };
    private getOwnedRepositories = async (request: Request, response: Response) => {
        const accessToken = await authManager.getAccessTokenFromAccount(request.params.uid, 'github.com');
        const repos = await githubApiCalls.getRepositories(accessToken);
        const reposMeta = repos.map(value => 
            githubUtils.apiRepositoryToMeta(value)
        );
        sendSuccess(response, reposMeta);
    }
    ;
    private cloneRepository = async (request: Request, response: Response) => {
        const owner = request.params.owner;
        const name = request.params.name;
        const branch = request.params.branch;
        const kind = request.params.kind;
        const accessToken = await authManager.getAccessTokenFromAccount(request.params.uid, 'github.com');
        const repo = await githubApiCalls.cloneBranch({
                owner, 
                name, 
                token: accessToken
             }, branch, kind);
        sendSuccess(response, repo);
    }
    ;
    private commitRepository = async (request: Request, response: Response) => {
        const owner = request.params.owner;
        const name = request.params.name;
        const branch = request.params.branch;
        const files: PackiFiles = request.body.files;
        authManager.getAccessTokenFromAccount(request.params.uid, 'github.com').then((accessToken) => {
            console.log('packi.github.commitRepository.owner.name.token', owner, name, accessToken);
            githubApiCalls.updateBranch(files, {
                owner, 
                name, 
                token: accessToken
             }, branch).then(repo => 
                sendSuccess(response, repo)
            ).catch(err => 
                sendFailure(response, err, 401)
            )
        }
        ).catch((err) => {
            console.log('packi.github.commitRepository.owner.name.err', owner, name, err);
            sendFailure(response, err, 501);
        }
        )
    }
    ;
}
