module.exports = (error, req, res, next) => {
    error.status = error.status || 500;
    error.message = error.message || 'Something went wrong';

    console.log(error)

    if (error.message.includes('english')) res.render('register', {error});
    if (error.message.includes('Wrong')) res.render('login', {error});
    if (error.message.includes('match')) res.render('register', {error});
    if (error.message.includes('Password should be at least')) res.render('register', {error});
    if (error.message.includes('exists')) res.render('register', {error});
    if (error.message.includes('number')) res.render('register', {error});
    if (error.message.includes('amount')) res.render('register', {error});

    if (error['errors']) {
        if (error['errors'].username) {
            error = {message: error['errors'].username['properties'].message};
            res.render('register', {error});
        } else {
            let errorMessage = Object.values(error['errors'])[0]['properties'].message;
            let user = req.user;

            error = {message: errorMessage};
            res.render('create', {error, user});
        }
    }
}