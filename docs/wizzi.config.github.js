const path = require('path');
module.exports = {
    wfjobName: "stfnbssl.github.io/wizzi/docs-job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname),
    plugins: [
        './wizzi-core/dist/index.js', 
        './wizzi-js/dist/index.js', 
        './wizzi-web/dist/index.js', 
    ], 
    pluginsBaseFolder: path.join(__dirname, '..', 'packages'),
    /*
    plugins: [
        'wizzi-core',
        'wizzi-web',
        'wizzi-js',
    ],
    */ 
    schemas: [
    ],
    globalContext: {
        gctxIsPackageDeploy: true,
        gctxIsDevelopment: false,
        gctxBaseUrl: 'https://stfnbssl.github.io/wizzi'
    },
};

