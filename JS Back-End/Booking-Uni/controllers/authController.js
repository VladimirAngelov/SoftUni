const router = require('express').Router();
const {register, login} = require('../services/authService');
const isAuthenticated = require('../middlewares/isAuthenticated');
const User = require('../models/User');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res, next) => {
    login(req.body)
        .then(token => {
            res.cookie('user_session', token, {httpOnly: true});
            res.redirect('/');
        }).catch(next)
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res, next) => {
    register(req.body)
        .then(() => {
            res.redirect('/auth/login');
        }).catch(next);
});

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie('user_session');
    res.redirect('/');
});

router.get('/profile', isAuthenticated, async (req, res) => {
    let user = await User.findById(req.user._id);
    res.render('profile', user);
});

module.exports = router;