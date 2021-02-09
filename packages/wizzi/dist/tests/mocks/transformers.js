/*
    artifact generator: C:\my\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\my\wizzi\stfnbssl\wizzi\packages\wizzi\.wizzi\ittf\tests\mocks\transformers.js.ittf
*/
'use strict';
var md = module.exports = {};
md.getTransformer = function(transformerName) {
    if (transformerName === 'tests/trans1') {
        return {
                trans: function(model, context, callback) {
                    model.__transformed = true;
                    model.testsName = model.wzName;
                    model.contextFrom = context.from;
                    return callback(null, model);
                }
            };
    }
    else {
        return null;
    }
};
