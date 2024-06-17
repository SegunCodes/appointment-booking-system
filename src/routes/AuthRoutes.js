const express = require("express")
const AuthController = require("../controllers/AuthController")
const validate = require('../middleware/validate')
const registrationSchema = require('../schemas/registrationSchema')
const loginSchema = require('../schemas/loginSchema')
const authRoutes = express.Router()

authRoutes.post("/register", validate(registrationSchema), AuthController.registerUser)
authRoutes.post("/login", validate(loginSchema), AuthController.login)

module.exports = authRoutes