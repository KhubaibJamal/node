var mongoose = require('mongoose');
var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    profilePic: String,
});

module.exports = mongoose.model('images', imageSchema);