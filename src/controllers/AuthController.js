const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = user.generateAuthToken();
        res.send({ user, token });
    } catch (e) {
        res.status(400).send();
    }
};