/*
    artifact generator: C:\My\wizzi\wizzi\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi\packages\wizzi\.wizzi\ittf\lib\acl\aclstat.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var Acl = require('./acl');
var Statistics = require('./statistics');
var config = null;
var AclStat = (function () {
    function AclStat(userId, subscriptionType, aclConfig, statisticsConfig) {
        _classCallCheck(this, AclStat);
        this.userId = userId;
        this.subscriptionType = subscriptionType;
        this.aclConfig = aclConfig;
        this.statisticsConfig = statisticsConfig;
        this._init();
    }
    AclStat.prototype._init = function() {
        if (config == null) {
            config = require('../../index').config;
        }
        // log 'wizzi.acl.AclStat._init.config', config
        // log 'wizzi.acl.AclStat._init.aclConfig', this.aclConfig
        // log 'wizzi.acl.AclStat._init.statisticsConfig', this.statisticsConfig
        this.acl = new Acl(this.aclConfig, config);
        this.statistics = new Statistics(this.statisticsConfig, config);
    }
    AclStat.prototype.checkAuth = function(operId, resourceType, resourceName) {
        return this.acl.checkAuth(this.userId, this.subscriptionType, operId, resourceType, resourceName);
    }
    AclStat.prototype.stat = function(operId, options) {
        return this.statistics.stat(this.userId, this.subscriptionType, operId, options);
    }
    return AclStat;
})();

module.exports = AclStat;
