/*
    artifact generator: C:\my\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\my\wizzi\wizzi\packages\wizzi-mtree\.wizzi\ittf\tests\reviewed\appender.js.ittf
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

describe("appender", function() {
    var store,
        appendedModel,
        node;
    before(function(done) {
        getFSDocumentStore(function(err, fsStore) {
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
            store = fsStore;
            done();
        });
    });
    it("should append a fragment", function(done) {
        var content_filepath = path.join(__dirname, 'repo', 'data', 'appender_1.tests.ittf');
        MTreeBrickProvider.createFromUri(content_filepath, {
            mTreeBuildUpContext: {}, 
            productionContext: mocks.ProductionContext, 
            __ittfDocumentStore: store
        }, function(err, provider) {
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
                    console.log('appendedModel.toIttf()', appendedModel.toIttf());
                    expect(appendedModel).to.be.an('object');
                    expect(appendedModel.nodes).to.be.an('array');
                    expect(appendedModel.nodes.length).to.be(1);
                    expect(appendedModel.nodes[0]).to.be.an('object');
                    node = appendedModel.nodes[0];
                    expect(node.row).to.be.a('number');
                    expect(node.row).to.be(1);
                    expect(node.col).to.be.a('number');
                    expect(node.col).to.be(1);
                    expect(node.name).to.be.a('string');
                    expect(node.name).to.be('root');
                    expect(node.children).to.be.an('array');
                    expect(node.children.length).to.be(1);
                    node = node.children[0];
                    expect(node.row).to.be.a('number');
                    expect(node.row).to.be(1);
                    expect(node.col).to.be.a('number');
                    expect(node.col).to.be(1);
                    expect(node.name).to.be.a('string');
                    expect(node.name).to.be('leaf');
                    expect(node.value).to.be.a('string');
                    expect(node.value).to.be('1');
                    expect(node.children).to.be.an('array');
                    expect(node.children.length).to.be(1);
                    node = node.children[0];
                    expect(node.row).to.be.a('number');
                    expect(node.row).to.be(2);
                    expect(node.col).to.be.a('number');
                    expect(node.col).to.be(5);
                    expect(node.name).to.be.a('string');
                    expect(node.name).to.be('leaf');
                    expect(node.value).to.be.a('string');
                    expect(node.value).to.be('1.1');
                    done();
                });
            });
        });
    });
    it("should ovveride a virtual node", function(done) {
        var content_filepath = path.join(__dirname, 'repo', 'data', 'appender_virtual_1.tests.ittf');
        MTreeBrickProvider.createFromUri(content_filepath, {
            mTreeBuildUpContext: {}, 
            productionContext: mocks.ProductionContext, 
            __ittfDocumentStore: store
        }, function(err, provider) {
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
                    console.log('appendedModel.toIttf()', appendedModel.toIttf());
                    expect(appendedModel).to.be.an('object');
                    expect(appendedModel.nodes).to.be.an('array');
                    expect(appendedModel.nodes.length).to.be(1);
                    expect(appendedModel.nodes[0]).to.be.an('object');
                    node = appendedModel.nodes[0];
                    expect(node.row).to.be.a('number');
                    expect(node.row).to.be(1);
                    expect(node.col).to.be.a('number');
                    expect(node.col).to.be(1);
                    expect(node.name).to.be.a('string');
                    expect(node.name).to.be('root');
                    expect(node.children).to.be.an('array');
                    expect(node.children.length).to.be(1);
                    node = node.children[0];
                    expect(node.row).to.be.a('number');
                    expect(node.row).to.be(1);
                    expect(node.col).to.be.a('number');
                    expect(node.col).to.be(1);
                    expect(node.name).to.be.a('string');
                    expect(node.name).to.be('leaf');
                    expect(node.value).to.be.a('string');
                    expect(node.value).to.be('1');
                    expect(node.children).to.be.an('array');
                    expect(node.children.length).to.be(1);
                    node = node.children[0];
                    expect(node.row).to.be.a('number');
                    expect(node.row).to.be(2);
                    expect(node.col).to.be.a('number');
                    expect(node.col).to.be(5);
                    expect(node.name).to.be.a('string');
                    expect(node.name).to.be('leaf');
                    expect(node.value).to.be.a('string');
                    expect(node.value).to.be('1.1');
                    expect(node.children).to.be.an('array');
                    expect(node.children.length).to.be(1);
                    node = node.children[0];
                    expect(node.row).to.be.a('number');
                    expect(node.row).to.be(4);
                    expect(node.col).to.be.a('number');
                    expect(node.col).to.be(13);
                    expect(node.name).to.be.a('string');
                    expect(node.name).to.be('leaf');
                    expect(node.value).to.be.a('string');
                    expect(node.value).to.be('x.x.x');
                    done();
                });
            });
        });
    });
});
