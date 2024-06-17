const express = require("express")
const MerchantController = require("../controllers/MerchantController")
const auth = require('../middleware/auth')
const validate = require('../middleware/validate');
const merchantSchema = require('../schemas/merchantSchema')
const merchantRoutes = express.Router()

merchantRoutes.post("/schedule", auth, validate(merchantSchema), MerchantController.createMerchantSchedule)
merchantRoutes.get("/", auth, MerchantController.getMerchants)

module.exports = merchantRoutes