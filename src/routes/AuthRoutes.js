const express = require("express")
const AuthController = require("../controllers/AuthController")
const authRoutes = express.Router()

authRoutes.post("/register", AuthController.registerUser)
authRoutes.post("/login", AuthController.login)

module.exports = authRoutes