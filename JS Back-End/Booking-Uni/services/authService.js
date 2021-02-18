const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {saltRounds, secret} = require('../config/config')
const emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

module.exports = {
    register: async ({username,email, password, rePassword}) => {
        if (!emailValidation.test(email)) throw {message: 'Email should be a valid email and consist only english letters and digits.'};

        if (password !== rePassword) throw {message: 'Passwords should match.'};

        if (password.length < 5) throw {message: 'Password should be at least 5 characters long.'};

        let isAlreadyExists = await User.findOne({username});

        if (isAlreadyExists) throw {message: 'User already exists!'};

        let hash = await bcrypt.hash(password, saltRounds);

        return new User({email, username, password: hash}).save();
    },
    login: async ({username, password}) => {
        let user = await User.findOne({username});

        if (!user) throw {message: 'Wrong username or password.'};

        let isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) throw {message: 'Wrong username or password.'};

        return jwt.sign({_id: user._id, username: user.username}, secret);
    }
}