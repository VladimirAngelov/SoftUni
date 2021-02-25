const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    amount: {
        type: Number,
        default: 0
    },
    expenses: []
})

module.exports = mongoose.model('User', userSchema);