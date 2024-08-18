const mongoose = require('mongoose');
const dataBase = require('../config/dataBase')

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    pass: {
        type : String,
        required : true
    }
});

module.exports = dataBase.model('users', userSchema);
