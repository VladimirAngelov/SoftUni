const router = require('express').Router();
const {getAll} = require('../services/expensesService');

router.get('/', (req, res) => {
    let user = req.user;
    if (user) {
        getAll(user._id)
            .then(currentUser => {
                res.render('expenses', {currentUser, user})
            })
    } else {
        res.render('home')
    }
});

module.exports = router;