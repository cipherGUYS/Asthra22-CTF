const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    _id: {type: String},
    flags: {type: Number},
    timestamp: {type: Array}
})

module.exports = mongoose.model('User',userschema)