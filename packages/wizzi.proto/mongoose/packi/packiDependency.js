const mongoose = require('mongoose');
   
const packiDependencySchema = new mongoose.Schema({
    owner: { type: String},
    name: { type: String},
    packiFiles: { 
        type: String,
        get: function(data) {
            return JSON.parse(data);
        },
        set: function(data) {
            return JSON.stringify(data);
        }        
    },
    userUpdated: Boolean
});

packiDependencySchema.index(
    { owner: 1, name: 1 },
    { unique: true }
)

let PackiDependency = null;

module.exports = {
    getPackiDependency: function() {
        if (!PackiDependency) { PackiDependency = mongoose.model('PackiDependency', packiDependencySchema); }
        return PackiDependency;
    }
}