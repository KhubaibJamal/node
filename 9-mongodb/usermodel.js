const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    comments: [{ body: String, date: Date }],
    data: {
        active: Boolean,
        typeValue: String
    },
    cuisines: [String]
});

module.exports = mongoose.model('user', userSchema);

// mongodb://localhost:27017