const express = require("express")
const MerchantController = require("../controllers/MerchantController")
const auth = require('../middleware/auth')
const merchantRoutes = express.Router()

merchantRoutes.post("/schedule", auth, MerchantController.createMerchantSchedule)
merchantRoutes.get("/", auth, MerchantController.getMerchants)

module.exports = merchantRoutes