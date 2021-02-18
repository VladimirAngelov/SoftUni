const mongoose = require('mongoose');
const uri = require('./config').dbUri

module.exports = () => {
    mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

    const db = mongoose.connection;

    db.once('open', () => console.log(`Connected to database!`))
}