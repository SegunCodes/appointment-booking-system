const Merchant = require('../models/Merchant');
const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
    const booking = new Booking({
        ...req.body,
        customerId: req.user._id,
    });
    try {
        await booking.save();
        res.status(201).send(booking);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ customerId: req.user._id });
        res.send(bookings);
    } catch (e) {
        res.status(500).send();
    }
};

exports.updateBooking = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['date', 'timeSlot', 'status'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const booking = await Booking.findOne({ _id: req.params.id, merchantId: req.user._id });

        if (!booking) {
            return res.status(400).send();
        }

        updates.forEach((update) => booking[update] = req.body[update]);
        await booking.save();
        res.send(booking);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findOneAndDelete({ _id: req.params.id, merchantId: req.user._id });

        if (!booking) {
            return res.status(404).send();
        }

        res.send(booking);
    } catch (e) {
        res.status(500).send();
    }
};