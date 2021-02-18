const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        // minlength: [5, 'Username should be at least 5 characters long.']
    },
    username: {
        type: String,
        required: true,
        // minlength: [5, 'Username should be at least 5 characters long.']
    },
    password: {
        type: String,
        required: true,
    },
    bookedHotels: [],
    offeredHotels: []
})

module.exports = mongoose.model('User', userSchema);