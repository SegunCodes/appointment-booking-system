const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    merchantId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Merchant' },
    date: { type: Date, required: true },
    timeSlot: { type: String, required: true },
    status: { type: String, required: false },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
