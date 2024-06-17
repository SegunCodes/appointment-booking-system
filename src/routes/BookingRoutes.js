const express = require("express")
const BookingController = require("../controllers/BookingController")
const auth = require('../middleware/auth')
const bookingRoutes = express.Router()

bookingRoutes.post("/create", auth, BookingController.createBooking)
bookingRoutes.get("/", auth, BookingController.getBookings)
bookingRoutes.patch("/:id", auth, BookingController.updateBooking)
bookingRoutes.delete("/:id", auth, BookingController.deleteBooking)
module.exports = bookingRoutes