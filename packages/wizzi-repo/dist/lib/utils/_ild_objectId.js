/*
    artifact generator: C:\My\wizzi\wizzi-mono\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-mono\packages\wizzi-repo\.wizzi\ittf\lib\utils\_ild_objectId.js.ittf
*/
'use strict';
// generated by v6-wizzi-js.artifacts.js.module.main
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

const os = require('os');
const crypto = require('crypto');
var ObjectId = (function () {
    function ObjectId(id) {
        _classCallCheck(this, ObjectId);
        if (id) {
            this.id = id;
            this.generationTime = new Date();
            return ;
        }
        /**
             Generates a MongoDB-style ObjectId in Node.js. Uses nanosecond timestamp in place of counter;
             should be impossible for same process to generate multiple objectId in same nanosecond? (clock
             drift can result in an *extremely* remote possibility of id conflicts).
             @returns {string} Id in same format as MongoDB ObjectId.
        */
        const seconds = Math.floor(new Date()/1000).toString(16);
        const machineId = crypto.createHash('md5').update(os.hostname()).digest('hex').slice(0, 6);
        const processId = process.pid.toString(16).slice(0, 4).padStart(4, '0');
        const counter = process.hrtime()[1].toString(16).slice(0, 6).padStart(6, '0');
        this.id = seconds + machineId + processId + counter;
        this.generationTime = new Date();
    }
    ObjectId.prototype.equals = function(otherID) {
        return this.id == otherID.id;
    }
    ObjectId.prototype.toString = function() {
        return this.id;
    }
    return ObjectId;
})();

module.exports = ObjectId;
