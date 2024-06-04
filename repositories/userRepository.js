const User = require('../models/userModel');

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const getUserByEmail = async (email) => {
    return await User.findOne({ email });
};

module.exports = {
    createUser,
    getUserByEmail
};
