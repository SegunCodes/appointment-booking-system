const express = require("express")
const BookingController = require("../controllers/BookingController")
const auth = require('../middleware/auth')
const bookingRoutes = express.Router()

bookingRoutes.post("/create", auth, BookingController.createBooking)
bookingRoutes.get("/", auth, BookingController.getBookings)
bookingRoutes.get("/update", auth, BookingController.updateBooking)
bookingRoutes.get("/delete", auth, BookingController.deleteBooking)
module.exports = bookingRoutes