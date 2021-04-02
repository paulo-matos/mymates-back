const mongoose = require('mongoose');

const schema = mongoose.Schema({
    number:{
        type: String,
        required: true
    },
    type:{
        type: String,
        default: "Celular"
    },
    idUser:{        
        type: mongoose.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Phone', schema, 'phones');