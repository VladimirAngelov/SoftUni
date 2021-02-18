module.exports = (error, req, res, next) => {
    error.status = error.status || 500;
    error.message = error.message || 'Something went wrong';

    console.log(error)

    // For message - Username should consist only english letters and digits.
    if (error.message.includes('english')) res.render('register', {error});
    // For message - Wrong username or password.
    if (error.message.includes('Wrong')) res.render('login', {error});
    // For message - Passwords should match.
    if (error.message.includes('match')) res.render('register', {error});
    // For message - Password should be at least 6 characters long.
    if (error.message.includes('long')) res.render('register', {error});
    // For message - User already exists.
    if (error.message.includes('exists')) res.render('register', {error});
    // For message -Image URL should be a valid link.
    if (error.message.includes('URL')) res.render('create', {error});

    // For mongoose schema validator
    if (error['errors']) {
        if (error['errors'].username) {
            // For username errors - Username should be at least 5 characters long.
            error = {message: error['errors'].username['properties'].message};
            res.render('register', {error});
        } else {
            // For errors in course schema
            let errorMessage = Object.values(error['errors'])[0]['properties'].message;
            let user = req.user;

            error = {message: errorMessage};
            res.render('create', {error, user});
        }
    }
}