/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi\.wizzi\ittf\examples\fromText\index.js.ittf
*/
'use strict';
var index = require('../../index');
index.createFactory('stefi', 'admin', {
    repo: {
        storeKind: 'filesystem'
    }, 
    plugins: {
        items: [
            'wizzi-web'
        ]
    }
}, function(err, wf) {
    if (err) {
        console.log('err', err);
        throw new Error(err.message);
    }
    wf.loadModelFromText([
        'html', 
        '    head', 
        '    body'
    ].join('\n'), 'html', function(err, result) {
        if (err) {
            console.log('err', err);
            if (err.toString()) {
                console.log('err.toString()', err.toString());
            }
            if (err.inner) {
                console.log('err.inner', err.inner);
                if (err.inner.toString) {
                    console.log('err.inner.toString()', err.inner.toString());
                }
            }
            throw new Error(err.message);
        }
        console.log('loadModelFromText\n', result);
        wf.loadModelAndGenerateArtifactFromText([
            'html', 
            '    head', 
            '    body'
        ].join('\n'), {}, 'html/document', function(err, result) {
            if (err) {
                console.log('err', err);
                if (err.toString()) {
                    console.log('err.toString()', err.toString());
                }
                if (err.inner) {
                    console.log('err.inner', err.inner);
                    if (err.inner.toString) {
                        console.log('err.inner.toString()', err.inner.toString());
                    }
                }
                throw new Error(err.message);
            }
            console.log('loadModelAndGenerateArtifactFromText\n', result);
        });
    });
});
