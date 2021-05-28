/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.account\.wizzi\server\src\services\mongodb.ts.ittf
    utc time: Tue, 25 May 2021 12:34:40 GMT
*/
import mongoose from 'mongoose';
import {ModelBuilderType} from '../features/app';
import {ConfigType} from '../features/config';

export function mongodbStart(config: ConfigType, modelBuilders: ModelBuilderType[]) {

    
    const { mongoUser, mongoPassword, mongoPath } = config;
    const connectUrl = `mongodb+srv://${mongoUser}:${mongoPassword}${mongoPath}`;
    
        // TODO (VIA) set mongoose.Promise = global.Promise
    return mongoose.connect(connectUrl, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
         }).then(() => {
        
            console.log('Mongodb. Connected to', mongoPath);
            modelBuilders.forEach(builder => 
            
                builder.buildModel()
            )
            return 'Connected';
        }
        , (err) => {
        
            throw new Error('\n\nMongodb. \nCannot connect to \n"' + connectUrl + '". \n\n' + err.message + '\n\n');
        }
        )
    ;
}

export const close = () => 

    mongoose.connection.close()
;
