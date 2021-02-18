const router = require('express').Router();
const {
    editHotel,
    getOne,
    create,
    bookHotel,
    bookUser,
    deleteHotel
} = require('../services/hotelService');

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

router.get('/details/:hotelId', isAuthenticated, (req, res, next) => {
    let user = req.user;
    let hotelId = req.params.hotelId;

    getOne(hotelId)
        .then(hotel => {
            let isBooked = hotel.usersBooked.find(u => u._id.toString() === user._id);

            if (isBooked) user.isBooked = true;

            if (user._id === hotel.owner.toString()) user.isOwner = true;

            res.render('details', {hotel, user});
        }).catch(next)
});

router.get('/book/:hotelId', isAuthenticated, async (req, res, next) => {
    try {
        let hotelId = req.params.hotelId;
        let userId = req.user._id;

        await bookUser(hotelId, userId);
        await bookHotel(hotelId, userId);
        res.redirect(`/hotel/details/${hotelId}`);
    } catch (error) {
        next();
    }
});

router.get('/edit/:hotelId', isAuthenticated, (req, res, next) => {
    let hotelId = req.params.hotelId;
    let user = req.user;

    getOne(hotelId)
        .then(hotel => {
            res.render('edit', {hotel, user})
        }).catch(next);
});

router.post('/edit/:hotelId', isAuthenticated, (req, res, next) => {
    let hotelId = req.params.hotelId;
    let data = req.body;

    editHotel(hotelId, data)
        .then(() => res.redirect(`/hotel/details/${hotelId}`))
        .catch(next);
});

router.get('/delete/:hotelId', isAuthenticated, (req, res, next) => {
    let hotelId = req.params.hotelId;

    deleteHotel(hotelId)
        .then(() => res.redirect('/'))
        .catch(next);
});

module.exports = router;