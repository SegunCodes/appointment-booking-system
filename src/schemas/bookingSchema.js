const Joi = require('joi');

const bookingSchema = Joi.object({
    merchantId: Joi.string().required(),
    date: Joi.date().required(),
    timeSlot: Joi.string().required(),
});

module.exports = bookingSchema;
