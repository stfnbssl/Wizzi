const mongoose = require('mongoose');
   
const packiItemSchema = new mongoose.Schema({
    owner: { type: String},
    name: { type: String},
    wizziSchema: { type: String},
    mainIttf: { type: String},
    packiFiles: { 
        type: String,
        get: function(data) {
            const json = JSON.parse(data);
            return json;
        },
        set: function(data) {
            return JSON.stringify(data);
        }
    },
    userUpdated: Boolean
});    

packiItemSchema.index(
    { owner: 1, name: 1 },
    { unique: true }
)

let PackiItem = null;

module.exports = {
    getPackiItem: function() {
        if (!PackiItem) { PackiItem = mongoose.model('PackiItem', packiItemSchema); }
        return PackiItem;
    }
}