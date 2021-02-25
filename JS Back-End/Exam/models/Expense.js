const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    merchant: {
        type: String,
        required: [true, 'Merchant is required!'],
        minlength: [4, 'Merchant should be at least 4 characters long.']
    },
    total: {
        type: Number,
        required: [true, 'Total is required!']
    },
    category: {
        type: String,
        required: [true, 'Category is required!']
    },
    description: {
        type: String,
        required: true,
        minlength: [3, 'Description should be minimum 3 characters long.'],
        maxlength: [30, 'Description should be maximum 30 characters long.'],
    },
    report: {
        type: Boolean,
        default: false,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
})

module.exports = mongoose.model('Expense', expenseSchema);