const path = require('path');
module.exports = {
    wfjobName: "wizzi-cli-job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    plugins: [
        './wizzi-core/dist/index.js', 
        'wizzi-js', 
        'wizzi-web'
    ], 
    pluginsBaseFolder: path.join(__dirname, '..'),
    globalContext: {
        isPackageDeploy: true,
        isDevelopment: false,
    },
};