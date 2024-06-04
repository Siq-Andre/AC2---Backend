const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secretKey = 'your_secret_key'; // Substitua por uma chave segura

const register = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const user = await userService.loginUser(req.body.email, req.body.password);
        const token = jwt.sign({ id: user._id, email: user.email }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

module.exports = {
    register,
    login
};
