const jwt = require('jsonwebtoken');
const {secret} = require('../config/config');

module.exports = function () {
    return (req, res, next) => {
        let token = req.cookies['user_session'];

        if (token) {
            jwt.verify(token, secret, (err, decoded) => {
                if (err) {
                    res.clearCookie('user_session');
                } else {
                    req.user = decoded;
                    req.user.isAuthenticated = true;
                }
            })
        }
        next();
    }
}