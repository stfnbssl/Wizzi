/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi-mtree\.wizzi\ittf\tests\quick\loader\evaluator.js.ittf
*/
'use strict';

var path = require('path');
var util = require('util');

var del = require('del');
var expect = require('expect.js');

var _ = require('lodash');
var file = require('wizzi-utils').file;
var verify = require('wizzi-utils').verify;
var createStoreFactory = require('wizzi-repo').createStoreFactory;
function getFSDocumentStore(callback) {
    createStoreFactory({
        kind: 'filesystem'
    }, function(err, storeFacory) {
        if (err) {
            return callback(err);
        }
        return storeFacory(callback);
    });
}

var mocks = require('../../mocks/misc');
var MTreeBrickProvider = require('../../../lib/loader/mTreeBrickProvider');
var mixer = require('../../../lib/loader/mixer');
var appender = require('../../../lib/loader/appender');
var evaluator = require('../../../lib/loader/evaluator');
var store,
    evaluatedModel,
    node;

function evaluate(uri, callback) {
    var loadContext = {
        mTreeBuildUpContext: {}, 
        productionContext: mocks.ProductionContext, 
        __ittfDocumentStore: store
    };
    MTreeBrickProvider.createFromUri(uri, loadContext, function(err, provider) {
        var mTree = provider.getPrimaryMTreeBrick();
        mixer(mTree, provider, function(err, mixedModel) {
            if (err) {
                console.log('err', err);
                throw new Error(err.message);
            }
            appender(mixedModel, function(err, appendedModel) {
                if (err) {
                    console.log('err', err);
                    throw new Error(err.message);
                }
                evaluator(appendedModel, loadContext, callback);
            });
        });
    });
}

describe("evaluator", function() {
    before(function(done) {
        store = new mocks.IttfDocumentStore();
        store.init({
            storeKind: 'filesystem'
        }, function(err, notUsed) {
            done();
        });
    });
    it("should load and evaluate", function(done) {
        var content_filepath = path.join(__dirname, 'repo', 'data', 'evaluator_1.tests.ittf');
        evaluate(content_filepath, function(err, evaluatedModel) {
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
            expect(evaluatedModel).to.be.an('object');
            expect(evaluatedModel.nodes).to.be.an('array');
            expect(evaluatedModel.nodes.length).to.be(1);
            expect(evaluatedModel.nodes[0]).to.be.an('object');
            node = evaluatedModel.nodes[0];
            expect(node.r).to.be.a('number');
            expect(node.r).to.be(1);
            expect(node.c).to.be.a('number');
            expect(node.c).to.be(1);
            expect(node.n).to.be.a('string');
            expect(node.n).to.be('test');
            expect(evaluatedModel.nodes[0].children).to.be.an('array');
            expect(evaluatedModel.nodes[0].children.length).to.be(1);
            node = evaluatedModel.nodes[0].children[0];
            expect(node.r).to.be.a('number');
            expect(node.r).to.be(2);
            expect(node.c).to.be.a('number');
            expect(node.c).to.be(5);
            expect(node.n).to.be.a('string');
            expect(node.n).to.be('team');
            expect(node.v).to.be.a('string');
            expect(node.v).to.be('INTER');
            done();
        });
    });
    it("should throw an error evaluating", function(done) {
        var content_filepath = path.join(__dirname, 'repo', 'data', 'evaluator_error_1.tests.ittf');
        evaluate(content_filepath, function(err, evaluatedModel) {
            console.log('should throw an error evaluating', '\n' + err.toString());
            expect(err.__is_error).to.be(true);
            expect(err.data).to.be.an('object');
            expect(err.data.errorName).to.be('IttfEvaluationError');
            done();
        });
    });
    it("should throw an error evaluating", function(done) {
        var content_filepath = path.join(__dirname, 'repo', 'data', 'evaluator_error_2.tests.ittf');
        evaluate(content_filepath, function(err, evaluatedModel) {
            if (err) {
                console.log('should throw an error evaluating', '\n' + err.toString());
            }
            expect(err.__is_error).to.be(true);
            expect(err.data).to.be.an('object');
            expect(err.data.errorName).to.be('JsWizziError');
            done();
        });
    });
    it("should throw an error evaluating", function(done) {
        var content_filepath = path.join(__dirname, 'repo', 'data', 'evaluator_error_3.tests.ittf');
        evaluate(content_filepath, function(err, evaluatedModel) {
            if (err) {
                console.log('should throw an error evaluating', '\n', err, '\n' + err.toString());
            }
            expect(err.__is_error).to.be(true);
            expect(err.data).to.be.an('object');
            expect(err.data.errorName).to.be('JsWizziError');
            done();
        });
    });
});
