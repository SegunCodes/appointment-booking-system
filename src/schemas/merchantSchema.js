const Joi = require('joi');

const merchantSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    schedule: Joi.array().items(Joi.object({
        day: Joi.string().required(),
        timeSlots: Joi.array().items(Joi.string()).required(),
    })).required(),
});

module.exports = merchantSchema;
