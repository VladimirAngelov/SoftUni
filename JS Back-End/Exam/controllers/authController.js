const router = require('express').Router();
const {register, login} = require('../services/authService');
const isAuthenticated = require('../middlewares/isAuthenticated');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {secret} = require('../config/config');

router.get('/login', (req, res) => {
    if (req.user) {
        res.redirect('/')
    } else {
        res.render('login');
    }
});

router.post('/login', (req, res, next) => {
    login(req.body)
        .then(token => {
            res.cookie('user_session', token, {httpOnly: true});
            res.redirect('/');
        }).catch(next)
});

router.get('/register', (req, res) => {
    if (req.user) {
        res.redirect('/')
    } else {
        res.render('register');
    }
});

router.post('/register', (req, res, next) => {
    register(req.body)
        .then((user) => {
            let token = jwt.sign({_id: user._id, username: user.username}, secret);
            res.cookie('user_session', token, {httpOnly: true});
            res.redirect('/');
        }).catch(next);
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie('user_session');
    res.redirect('/');
});

router.get('/profile', isAuthenticated, async (req, res) => {
    let currentUser = await User.findById(req.user._id);
    let user = req.user;

    if (currentUser.expenses.length > 0) {
        currentUser.totalAmount = currentUser.expenses.reduce((acc, val) => {
            return acc.total + val.total;
        });
    } else {
        currentUser.totalAmount = 0;
    }
    if (typeof currentUser.totalAmount === 'object') {
        currentUser.totalAmount = currentUser.expenses[0].total;
    }
    currentUser.totalMerches = currentUser.expenses.length;
    currentUser.balance = currentUser.amount.toFixed(2);

    res.render('profile', {currentUser, user});
});

module.exports = router;