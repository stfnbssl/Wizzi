const mongoose = require('mongoose');
   
const userSchema = new mongoose.Schema({
    _id: { type: String, unique: true },
    email: { type: String, unique: true },
    name: String,
});    

const User;

module.exports = {
    getUser: function() {
        if (!User) { User = mongoose.model('User', userSchema); }
        return User;
    }
}