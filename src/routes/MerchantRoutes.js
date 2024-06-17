const express = require("express")
const MerchantController = require("../controllers/MerchantController")
const merchantRoutes = express.Router()

authRoutes.post("/create-merchant-schedule", MerchantController.createMerchantSchedule)
authRoutes.get("/merchants", MerchantController.getMerchants)

module.exports = merchantRoutes