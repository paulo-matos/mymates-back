const mongoose = require('mongoose');

const schema = mongoose.Schema({
    zipcode:{
        type: String,
        required: true
    },
    street:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true
    },
    complement:{
        type: String
    },
    neighborhood:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    idUser:{        
        type: mongoose.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Address', schema, 'addresses');