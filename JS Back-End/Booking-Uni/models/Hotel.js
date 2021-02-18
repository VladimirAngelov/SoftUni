const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Hotel name is required!'],
        minlength: [4, 'The name should be at least 4 characters'],
        unique: true
    },
    city: {
        type: String,
        required: [true, 'City is required!'],
        minlength: [3, 'City should be at least 3 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image url is required!']
    },
    freeRooms: {
        type: Number,
        required: [true, 'Free rooms is required!'],
        min: [1, 'The number of free rooms should be between 1 and 100!'],
        max: [100, 'The number of free rooms should be between 1 and 100!']
    },
    usersBooked: [],
    owner: {
        type: mongoose.Types.ObjectId,
        required: true
    },
})

module.exports = mongoose.model('Hotel', courseSchema);