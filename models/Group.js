const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: true
    }
});

module.exports = mongoose.model('Group', schema, 'groups');