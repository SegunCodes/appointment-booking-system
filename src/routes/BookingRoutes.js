const express = require("express")
const BookingController = require("../controllers/BookingController")
const auth = require('../middleware/auth')
const validate = require('../middleware/validate')
const bookingSchema = require('../schemas/bookingSchema')
const bookingRoutes = express.Router()

bookingRoutes.post("/create", auth, validate(bookingSchema), BookingController.createBooking)
bookingRoutes.get("/", auth, BookingController.getBookings)
bookingRoutes.patch("/:id", auth, BookingController.updateBooking)
bookingRoutes.delete("/:id", auth, BookingController.deleteBooking)
module.exports = bookingRoutes