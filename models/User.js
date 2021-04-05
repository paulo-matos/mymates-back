const mongoose = require('mongoose');

const schema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true }
);

module.exports = mongoose.model('User', schema, 'users');