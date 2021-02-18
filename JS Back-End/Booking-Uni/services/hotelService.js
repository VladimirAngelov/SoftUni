const Hotel = require('../models/Hotel');
const User = require('../models/User');

module.exports = {
    getAll: () => {
        return Hotel
            .find().lean();
    },
    getOne: (id) => Hotel.findOne({_id: id}).lean(),
    create: async (hotelData, userId) => {
        let urlPattern = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        if (!hotelData.imageUrl.match(urlPattern)) throw {message: 'Image URL should be a valid link.'}

        let hotel = await new Hotel({...hotelData, owner: userId})
            .save();

        let user = await User.findById(userId)
        user.offeredHotels.push(hotel)

        return user.save();
    },
    bookHotel: async (courseId, userId) => {
        let user = await User.findById(userId);
        let hotel = await Hotel.findById(courseId);
        hotel.usersBooked.push(user);

        return hotel.save();
    },
    bookUser: async (courseId, userId) => {
        let user = await User.findById(userId);
        let hotel = await Hotel.findById(courseId);
        user.bookedHotels.push(hotel);

        return user.save();
    },
    editHotel: (id, data) => Hotel.updateOne({_id: id}, data),
    deleteHotel: (id) => Hotel.deleteOne({_id: id})
}