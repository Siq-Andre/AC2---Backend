const bcrypt = require('bcryptjs');
const userRepository = require('../repositories/userRepository');

const createUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = {
        ...userData,
        password: hashedPassword
    };
    return await userRepository.createUser(newUser);
};

const loginUser = async (email, password) => {
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }
    return user;
};

module.exports = {
    createUser,
    loginUser
};
