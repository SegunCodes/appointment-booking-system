const Merchant = require('../models/Merchant');

exports.createMerchantSchedule = async (req, res) => {
    const merchant = new Merchant(req.body);
    try {
        await merchant.save();
        res.status(201).send(merchant);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getMerchants = async (req, res) => {
    try {
        const merchants = await Merchant.find({});
        res.send(merchants);
    } catch (e) {
        res.status(500).send();
    }
};