const Joi = require('joi');

const registrationSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('customer', 'merchant').required(),
});

module.exports = registrationSchema;
