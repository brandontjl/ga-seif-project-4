require('dotenv').config()
const Joi = require('joi')
const jwt = require("jsonwebtoken")
const userModel = require("../models/UserModel")

const userControllers = {
    register: async (req, res) => {
        const data = req.body

    }
}