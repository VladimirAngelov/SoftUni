const router = require('express').Router();
const {
    refill,
    getOne,
    create,
    deleteExpense
} = require('../services/expensesService');

const isAuthenticated = require('../middlewares/isAuthenticated');

router.get('/create', isAuthenticated, (req, res) => {
    let user = req.user;
    res.render('create', {user});
});

router.post('/create', isAuthenticated, (req, res, next) => {
    let user = req.user;

    create(req.body, user._id)
        .then(() => {
            res.redirect('/');
        }).catch(next);
});

router.get('/details/:expenseId', isAuthenticated, (req, res, next) => {
    let user = req.user;
    let expenseId = req.params.expenseId;

    getOne(expenseId)
        .then(expense => {
            res.render('details', {expense, user});
        }).catch(next)
});

router.get('/delete/:expenseId', isAuthenticated, (req, res, next) => {
    let expenseId = req.params.expenseId;
    let user = req.user;

    deleteExpense(expenseId, user._id)
        .then(() => res.redirect('/'))
        .catch(next);
});

router.post('/refill', isAuthenticated, (req, res) => {
    let user = req.user;

    refill(req.body.refill, user._id)
        .then(() => res.redirect('/'));
});


module.exports = router;