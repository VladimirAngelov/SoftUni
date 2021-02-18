const router = require('express').Router();
const {getAll} = require('../services/hotelService');

router.get('/', (req, res) => {
    let user = req.user;
    // res.render('home', {user})
    getAll()
        .then(data => {
            let hotels = data.sort((a, b) => b.freeRooms - a.freeRooms)

            res.render('home', {hotels, user});
        }).catch(error => res.render('guest-home', {error}));
});

module.exports = router;