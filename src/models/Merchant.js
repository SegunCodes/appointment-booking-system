const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    schedule: [{
        day: { type: String, required: true },
        timeSlots: [String],
    }],
});

const Merchant = mongoose.model('Merchant', merchantSchema);

module.exports = Merchant;
