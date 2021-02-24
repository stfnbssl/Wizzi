/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    package: wizzi-js@0.7.7
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi\.wizzi\ittf\tests\all\services\pluginsManager_internal_1.js.ittf
*/
'use strict';

var path = require('path');
var util = require('util');

var del = require('del');
var expect = require('expect.js');

var _ = require('lodash');
var file = require('wizzi-utils').file;
var verify = require('wizzi-utils').verify;

var pluginsManager = require('../../lib/services/pluginsManager');

describe("pluginsManager internals 1", function() {
    
    var pluginsManagerInstance = null;
    
    before(function() {
        pluginsManagerInstance = new pluginsManager.PluginsManager();
    });
    
    it("should resolve a plugin module", function(done) {
        var pkgPath = path.resolve(__dirname, '../mocks/plugin.js');
        pluginsManager.resolveModule(__dirname, '../mocks/plugin', function(err, pmod) {
            if (err) {
                console.log('err', err);
                throw new Error(err);
            }
            // log 'pluginsManager internals 1 pmod', pmod
            expect(pmod).to.be.an('object');
            expect(pmod.createFactoryPlugin).to.be.a('function');
            expect(pmod.packagePath).to.be.a('string');
            expect(pmod.packagePath).to.be(pkgPath);
            done();
        })
    });
    
    it("should give an error trying to resolve a plugin package", function(done) {
        pluginsManager.resolvePackage(__dirname, '../mocks/plugin/package.json', function(err, pkg) {
            console.log('pluginsManager internals 1 err, pkg', err, pkg);
            expect(err.__is_error).to.be(true);
            expect(err.name).to.be.a('string');
            expect(err.name).to.be('ENOENT');
            done();
        })
    });
    
    it("should resolve a plugin package", function(done) {
        var pkgPathExpected = path.resolve(__dirname, '../mocks/plugin_ex/package.json');
        pluginsManager.resolvePackage(__dirname, '../mocks/plugin_ex/package.json', function(err, pkgpath) {
            if (err) {
                console.log('err', err);
                throw new Error(err);
            }
            expect(pkgpath).to.be.a('string');
            expect(pkgpath).to.be(pkgPathExpected);
            done();
        })
    });
});
