/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.backend\.wizzi\src\features\production\types.ts.ittf
    utc time: Wed, 07 Jul 2021 15:52:36 GMT
*/

import {Document} from "mongoose";

export type IArtifactProduction = { 
    owner: string;
    name: string;
    description: string;
    mainIttf: string;
    wizziSchema: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type IArtifactProduction_doc = { 
    _doc: IArtifactProduction;
};

export interface IArtifactProductionModel extends IArtifactProduction, IArtifactProduction_doc, Document {
}

export type IPackageProduction = { 
    owner: string;
    name: string;
    description: string;
    packiFiles: string;
    created_at: Date;
    updated_at: Date;
};


type IPackageProduction_doc = { 
    _doc: IPackageProduction;
};

export interface IPackageProductionModel extends IPackageProduction, IPackageProduction_doc, Document {
}
