var path = require('path');
var wizzi = require('../../../../wizzi/dist/index.js');
var version = '0.1'

/* begin params */
var packageName = 'gamma_react_ts_manual';
var $name = packageName + ' ' + version;
/*
    end params */

wizzi.executeWizziJob({
    user: 'stefi',
    role: 'admin',
    storeKind: 'filesystem',
    config: {
        wfBaseFolder: 'c:/my/wizzi/' + version,
        plugins: [
            '../../../wizzi-core/dist/index.js', 
            '../../../wizzi-js/dist/index.js', 
            '../../../wizzi-web/dist/index.js', 
        ], 
    },
    job: {
        name: $name,
        ittfDocumentUri: path.join(__dirname, 'generate.wfjob.ittf'),
        productionOptions: wizzi.productionOptions({
            indentSpaces: 4,
            basedir: __dirname,
            verbose: 2
        }),
        globalContext: {
            wzConfigIsDevelopment: true
        }
    }
}, function (err) {
    if (err) {
        wizzi.printWizziJobError($name, err);
    }
});