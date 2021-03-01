const Expense = require('../models/Expense');
const User = require('../models/User');

module.exports = {
    getAll: (userId) => {
        return User
            .findById(userId).lean()
    },
    getOne: (id) => Expense.findOne({_id: id}).lean(),
    create: async (data, userId) => {
        data.report = data.report === 'on';

        let expense = await new Expense({...data, user: userId})
            .save();

        let user = await User.findById(userId)
        user.expenses.push(expense)

        return user.save();
    },
    deleteExpense: async (expenseId, userId) => {
        await Expense.deleteOne({_id: expenseId});
        let user = await User.findById(userId)
        let found = user.expenses.find(x => x._id.toString() === expenseId);
        let index = user.expenses.indexOf(found);
        user.expenses.splice(index, 1);
        return user.save()
    },
    refill: (amount, id) => {
        amount = +amount;
        return User.findById(id)
            .then(user => {
                user.amount += amount;
                return user.save();
            })
    }
}