const homeController = require('./controllers/homeController');
const authController = require('./controllers/authController');
const expenseController = require('./controllers/expenseController');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/expenses', expenseController);
    app.get('*', (req, res) => {
        res.render('404');
    })
}