const mongoose = require('mongoose');

const schemaPhone = new mongoose.Schema({
    number:{
        type: String,
        required: true
    },
    type:{
        type: String
    }
});

const schemaAddress = new mongoose.Schema({
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
    }
});


const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String
    },
    company: {
        type: String
    },
    department: {
        type: String
    },
    position: {
        type: String
    },
    email: {
        type: String
    },
    birthday: {
        type: Date
    },
    phones: [{
        type: schemaPhone,
        required: true
    }],
    groups:[{
        type: mongoose.ObjectId,
        ref: 'Group'
    }],
    addresses:[{
        type: schemaAddress
    }],
    idUser:{
        type: mongoose.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Contact', schema, 'contacts');