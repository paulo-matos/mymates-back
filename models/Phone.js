const mongoose = require('mongoose');

const schema = new Schema({
    number:{
        type: String,
        required: true
    },
    type:{
        type: String,
        default: "Celular"
    }
});

module.exports = mongoose.model('Phone', schema, 'phones');